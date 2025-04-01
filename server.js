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

// Enhanced compileAndRunC function with proper output handling
async function compileAndRunC(code, testCase, expectedOutput, filePath) {
  return new Promise((resolve) => {
    // Generate complete C program
    let completeCode = `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

${code}

int main() {
  ${testCase.replace(/;$/, "")};
  return 0;
}
`;

    fs.writeFileSync(`${filePath}.c`, completeCode);

    const compileCommand = `gcc ${filePath}.c -o ${filePath}`;
    const runCommand = `${filePath}`;

    exec(compileCommand, (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        // Cleanup on error
        try {
          fs.existsSync(`${filePath}.c`) && fs.unlinkSync(`${filePath}.c`);
          fs.existsSync(filePath) && fs.unlinkSync(filePath);
        } catch (e) {}
        
        return resolve({
          success: false,
          error: compileStderr,
          output: "",
          expected_output: expectedOutput
        });
      }

      exec(runCommand, { timeout: 5000 }, (runError, runStdout, runStderr) => {
        // Cleanup after execution
        try {
          fs.existsSync(`${filePath}.c`) && fs.unlinkSync(`${filePath}.c`);
          fs.existsSync(filePath) && fs.unlinkSync(filePath);
        } catch (e) {}

        if (runError) {
          return resolve({
            success: false,
            error: runError.signal === 'SIGTERM' ? 
              "Timeout: Program took too long to execute" : 
              runError.message,
            output: "",
            expected_output: expectedOutput
          });
        }

        // Process output
        const outputLines = runStdout.split(/\r?\n/)
          .filter(line => line.trim().length > 0)
          .map(line => line.trim());
        
        const actualOutput = outputLines.join(' ').trim();
        const expected = expectedOutput.toString().trim();

        console.log("----- ACTUAL OUTPUT -----");
        console.log(JSON.stringify(actualOutput));
        console.log("----- EXPECTED OUTPUT -----");
        console.log(JSON.stringify(expected));
        console.log("----- HEX DUMP -----");
        console.log("Actual:  ", Buffer.from(actualOutput).toString('hex'));
        console.log("Expected:", Buffer.from(expected).toString('hex'));

        const passed = actualOutput === expected;

        resolve({
          success: passed,
          output: actualOutput,
          expected_output: expected,
          error: passed ? null : `Expected: ${expected}, Got: ${actualOutput}`
        });
      });
    });
  });
}

// Run endpoint with enhanced output processing
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
  }
});

// Health Check
app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    environment: "C language support",
    version: "1.0.1"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Make sure to run this server for C language support");
});

// Cleanup on exit
process.on("SIGINT", () => {
  console.log("\nCleaning up temporary files...");
  try { 
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  } catch(e) {
    console.error("Cleanup error:", e);
  }
  process.exit();
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
