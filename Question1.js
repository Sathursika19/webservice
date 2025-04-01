// Q1: Find maximum purchase amount within budget
function getMaxPurchaseAmount(budget, keyboardPrices, mousePrices) {
    let maxAmount = -1;
    for (let j of keyboardPrices) {
        for (let m of mousePrices) {
            let total = j + m;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }
    return maxAmount;
}

// Test Cases
console.log("Budget = 60");
console.log("Keyboard prices = [10,50,60]");
console.log("Mouse prices = [5,8,12]");
console.log("Return", getMaxPurchaseAmount(60, [10, 50, 60], [5, 8, 12])); 
console.log("\nBudget = 10");
console.log("Keyboard prices = [3,1]");
console.log("Mouse prices = [5,2,8]");
console.log("Return", getMaxPurchaseAmount(10, [3, 1], [5, 2, 8])); 
console.log("\nBudget = 20");
console.log("Keyboard prices = [30,15]");
console.log("Mouse prices = [8,10,6]");
console.log("Return", getMaxPurchaseAmount(20, [30, 15], [8, 10, 6])); 