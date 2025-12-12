// Simple JS Calculator in console
function calculator(num1, num2, operator) {
    let result;
    if(operator === '+') result = num1 + num2;
    else if(operator === '-') result = num1 - num2;
    else if(operator === '*') result = num1 * num2;
    else if(operator === '/') result = num1 / num2;
    else return "Invalid operator! Use +, -, *, /";
    return result;
}

// Example usage:
console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5
console.log(calculator(10, 5, '*')); // 50
console.log(calculator(10, 5, '/')); // 2
console.log(calculator(10, 5, '%')); // Invalid operator! Use +, -, *, /
