console.log("Hello, World!");

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
// Placeholder for future code
function multiply(a, b) {
    return a * b;
}

function sumArray(numbers) {
    if (!Array.isArray(numbers)) throw new TypeError('sumArray expects an array');
    return numbers.reduce((acc, n) => acc + n, 0);
}

function calculate(op, ...nums) {
    switch (op) {
        case 'add':
            return nums.reduce((s, n) => s + n, 0);
        case 'sub':
            return nums.slice(1).reduce((s, n) => s - n, nums[0] || 0);
        case 'mul':
            return nums.reduce((s, n) => s * n, nums.length ? 1 : 0);
        default:
            throw new Error('Unsupported operation: ' + op);
    }
}

console.log('multiply(4,5)=', multiply(4, 5));
console.log('sumArray([1,2,3,4])=', sumArray([1, 2, 3, 4]));
console.log("calculate('add',1,2,3)=", calculate('add', 1, 2, 3));
console.log("calculate('sub',10,5,2)=", calculate('sub', 10, 5, 2));