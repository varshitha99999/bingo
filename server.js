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
const extractFunctionName = (code) => {
  const match = code.match(/\b(?:int|float|double|char|void)\s+(\w+)\s*\(/);
  return match ? match[1] : null;
};

// Function to compile and run C code
async function compileAndRunC(code, testCase, expectedOutput, functionName, filePath) {
  return new Promise((resolve) => {
    // Extract arguments from test case (supports multiple arguments)
    const argMatch = testCase.match(/\((.*?)\)/);
    const argument = argMatch ? argMatch[1] : "";

    // Add proper includes and main function
    const userCodeWithMain = `
#include <stdio.h>
#include <stdlib.h>

${code}

int main() {
    printf("%d\\n", ${functionName}(${argument}));
    return 0;
}
`;

    console.log("Generated C code:", userCodeWithMain);
    fs.writeFileSync(`${filePath}.c`, userCodeWithMain);

    const compileAndRunCommand = `gcc ${filePath}.c -o ${filePath} && ${filePath}`;
    console.log("Running command:", compileAndRunCommand);

    exec(compileAndRunCommand, { timeout: 5000 }, (error, stdout, stderr) => {
      if (error) {
        console.error("Compilation/Execution Error:", stderr);
        return resolve({
          success: false,
          error: "Compilation or execution failed",
          output: stderr.trim(),
          expected_output: expectedOutput
        });
      }

      console.log("Raw Output:", JSON.stringify(stdout));
      console.log("Raw Expected:", JSON.stringify(expectedOutput));

      const cleanOutput = stdout.replace(/[\r\n]+/g, "").trim();
      const cleanExpected = expectedOutput.toString().trim();


      console.log("Clean Output:", cleanOutput);
      console.log("Clean Expected:", cleanExpected);

      const passed = cleanOutput === cleanExpected;

      resolve({
        success: passed,
        output: cleanOutput,
        expected_output: cleanExpected,
        error: passed ? null : "Output does not match expected value"
      });
    });
  });
}

// C Code Validation with Hidden Tests
app.post("/run", async (req, res) => {
  const { code, testCase, expectedOutput } = req.body;

  if (!code || !testCase || expectedOutput === undefined) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: code, testCase, or expectedOutput",
    });
  }

  const functionName = extractFunctionName(code);
  if (!functionName) {
    return res.status(400).json({
      success: false,
      error: "Could not detect a valid function in the provided C code.",
    });
  }

  const filename = `c_solution_${Date.now()}`;
  const filePath = path.join(TEMP_DIR, filename);

  try {
    // Validate only the given test case
    const testResult = await compileAndRunC(code, testCase, expectedOutput, functionName, filePath);
    
    res.json({
      success: testResult.success,
      error: testResult.success ? null : testResult.error,
      results: [
        {
          test_case: testCase,
          passed: testResult.success,
          output: testResult.output,
          expected_output: expectedOutput,
          error: testResult.error
        }
      ]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  } finally {
    // Clean up files
    try {
      if (fs.existsSync(`${filePath}.c`)) fs.unlinkSync(`${filePath}.c`);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch (cleanupError) {
      console.error("Cleanup error:", cleanupError);
    }
  }
});


// Health Check Endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handle Cleanup on Exit
process.on("SIGINT", () => {
  console.log("Cleaning up temporary files...");
  try {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  } catch (err) {
    console.error("Cleanup error:", err);
  }
  process.exit();
});