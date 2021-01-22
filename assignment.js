//https://github.com/razikuljoni/assignment03

//kilometerToMeter

// function kilometerToMeter(kilometer) {
//     var meter = kilometer * 1000;
//     return meter;
// }
// var result = kilometerToMeter(11);
// console.log(result);




//budgetCalculator

// function budgetCalculator(watch,phone,laptop) {
//     watch = watch * 50;
//     phone = phone * 100;
//     laptop = laptop * 500;
//     return watch + phone + laptop;
// }
// var total = budgetCalculator(2, 1, 2);
// console.log(total);




//hotelCost

// function hotelCost(day) {
//     var cost = 0;
//     if (day <= 10) {
//         cost = day * 100;
//     }
//     else if (day <= 20) {
//         var firstPart = 10 * 100;
//         var remainingDays = day - 10;
//         var secondPart = remainingDays * 80;
//         cost = firstPart + secondPart;
//     }
//     else {
//         var firstPart = 10 * 100;
//         var secondPart = 10 * 80;
//         var remainingDays = day - 20;
//         var thirdPard = remainingDays * 50;
//         cost = firstPart + secondPart + thirdPard;
//     }
//     return cost;
// }
// var totalCost = hotelCost(15);
// console.log(totalCost);



//megaFriend

function megaFriend(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
var longest = megaFriend([
    "joni",
    "second item",
    "third longish item",
    "third longish item one",
]);
console.log(longest);
