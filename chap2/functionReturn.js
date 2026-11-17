"use strict";
function runMore(distance) {
    return distance + 10;
}
console.log(runMore(20));
function eat(calories) {
    console.log("I ate " + calories + " calories");
}
function sleepIn(hours) {
    console.log("I slept " + hours + " hours");
}
let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
