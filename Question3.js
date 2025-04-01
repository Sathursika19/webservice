// Q3: Rearrange digits to form the maximum number
function getMaxValue(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log("Input number = 215");
console.log("Max =", getMaxValue(215)); 
console.log("\nInput number = 1093");
console.log("Max =", getMaxValue(1093)); 
