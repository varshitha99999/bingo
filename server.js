const express = require("express");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Temporary directory for C files
const TEMP_DIR = path.join(__dirname, "temp");
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR);
}

// Function to extract function name from C code
function extractFunctionName(code) {
  const match = code.match(/\b(?:int|float|double|char|void)\s+(\w+)\s*\(/);
  return match ? match[1] : null;
}

// Enhanced compileAndRunC function
async function compileAndRunC(code, testCase, expectedOutput, filePath) {
  return new Promise((resolve) => {
    // Extract array declarations from test case
    let arrayDeclarations = "";
    if (testCase.includes("int arr[]")) {
      arrayDeclarations = testCase.split(";")[0] + ";";
      testCase = testCase.split(";").slice(1).join(";");
    }

    // Generate complete C program with output printing
    const completeCode = `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

${code}

int main() {
  ${arrayDeclarations}
  ${testCase.replace(/;$/, "")};
  return 0;
}
`;

    fs.writeFileSync(`${filePath}.c`, completeCode);

    const compileCommand = `gcc ${filePath}.c -o ${filePath}`;
    const runCommand = `${filePath}`;

    exec(compileCommand, (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        return resolve({
          success: false,
          error: compileStderr,
          output: "",
          expected_output: expectedOutput
        });
      }

      exec(runCommand, { timeout: 5000 }, (runError, runStdout, runStderr) => {
        // Clean up the output by removing any extra whitespace or newlines
        const output = runStdout.trim().replace(/\s+/g, ' ');
        const expected = expectedOutput.toString().trim().replace(/\s+/g, ' ');
        
        // More flexible comparison
        const passed = output.includes(expected) || expected.includes(output);

        resolve({
          success: passed,
          output: output,
          expected_output: expectedOutput,
          error: passed ? null : `Expected: ${expectedOutput}, Got: ${output}`
        });
      });
    });
  });
}

// Simplified /run endpoint
app.post("/run", async (req, res) => {
  const { code, testCase, expectedOutput } = req.body;

  if (!code || !testCase || expectedOutput === undefined) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: code, testCase, or expectedOutput",
    });
  }

  const filename = `c_solution_${Date.now()}`;
  const filePath = path.join(TEMP_DIR, filename);

  try {
    const result = await compileAndRunC(
      code, 
      testCase, 
      expectedOutput, 
      filePath
    );

    res.json({
      success: result.success,
      output: result.output,
      expected_output: result.expected_output,
      error: result.error
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  } finally {
    // Cleanup
    try { 
      fs.existsSync(`${filePath}.c`) && fs.unlinkSync(`${filePath}.c`);
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    } catch(e) {}
  }
});

// Health Check
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Make sure to run this server for C language support");
});

// Cleanup on exit
process.on("SIGINT", () => {
  console.log("Cleaning up temporary files...");
  try { fs.rmSync(TEMP_DIR, { recursive: true, force: true }); } catch(e) {}
  process.exit();
});
