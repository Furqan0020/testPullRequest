/**
 * DevOps Calculator
 * A simple calculator to practice Git workflows and CI/CD.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export functions for testing (Phase 3)
module.exports = { add, subtract };

// Simple manual test instructions (Run if executed directly)
if (require.main === module) {
  console.log("DevOps Calculator v1.0");
  console.log("Run with: node calculator.js");

  // Example usage
  console.log(`2 + 3 = ${add(2, 3)}`);
  console.log(`5 - 2 = ${subtract(5, 2)}`);
}