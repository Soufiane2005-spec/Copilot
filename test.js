// Factorial function - Iterative approach (efficient)
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Alternative: Recursive approach
function factorialRecursive(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Test examples
console.log(factorial(5));      // Output: 120
console.log(factorial(10));     // Output: 3628800
console.log(factorial(0));      // Output: 1
