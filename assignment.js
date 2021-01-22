//https://github.com/shohanurshanto/assignment-3

//Convert kilometer To Meter

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
    }
    else {
        meter = "Invalid input";
    }
    return meter;
}
var result = kilometerToMeter(6);
console.log(result);



//budgetCalculator

function budgetCalculator(watch,phone,laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        watch = watch * 50;
        phone = phone * 100;
        laptop = laptop * 500;
        return watch + phone + laptop;
    } else {
        return "Invalid input";
    }
}
var total = budgetCalculator(6,8,3);
console.log(total);



//hotelCost

function hotelCost(day) {
    var cost = 0;
    if (day<=0) {
        return "Invalid Days";
    }
    else if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = day - 10;
        var second10Days = remainingDays * 80;
        cost = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = day - 20;
        var moreThan20Days = remainingDays * 50;
        cost = first10Days + second10Days + moreThan20Days;
    }
    return cost;
}
var totalCost = hotelCost(29);
console.log(totalCost);



//megaFriend

function megaFriend(names) {
    var length = 0;
    var longestName;

    for (var i = 0; i < names.length; i++) {
        if (names[i].length > length) {
            var length = names[i].length;
            longestName = names[i];
        }
    }
    return longestName;
}
var longestName = megaFriend([
    "Fourkan",
    "Roman",
    "Zunayed",
    "Jafor",
    "Alim",
]);
console.log(longestName);