//Tip Calculator
function tipCalculator(bill) {
    switch (true) {
        case bill <= 50:
            return (20 / 100) * bill;
        case 50 <= bill <= 200:
            return (15 / 100) * bill;
        case bill >= 200:
            return (10 / 100) * bill;
    }
}

//All three tips
var allTips = [];
allTips.push(tipCalculator(124), tipCalculator(48), tipCalculator(268));
console.log("All three Tips");
console.log(allTips);


//All three final amount (bill + tip)
var finalAmount = [];
finalAmount.push(124 + tipCalculator(124), 48 + tipCalculator(48), 268 + tipCalculator(268));
console.log("Final Amount from 3 restaurants.");
console.log(finalAmount);







