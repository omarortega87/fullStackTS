"use strict";
//let runner: Run = function (miles: number): boolean {
let runner = function (miles) {
    if (miles > 10) {
        return true;
    }
    else {
        return false;
    }
};
console.log(runner(99));
