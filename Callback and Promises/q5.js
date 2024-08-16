function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(number => number * 2);
    callback(result);
}

// Example usage:
const numbers = [1, 2, 3, 4];
multiplyWithCallback(numbers, (result) => {
    console.log(result); // Output: [2, 4, 6, 8]
});
