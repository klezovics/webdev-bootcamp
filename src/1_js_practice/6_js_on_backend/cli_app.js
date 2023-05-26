const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

async function runCalculator() {
  const num1 = await askQuestion("Enter the first number: ");
  const operator = await askQuestion("Enter the operator (+, -, *, /): ");
  const num2 = await askQuestion("Enter the second number: ");

  const result = calculate(num1, operator, num2);
  console.log(`Result: ${result}`);

  rl.close();
}

runCalculator();
