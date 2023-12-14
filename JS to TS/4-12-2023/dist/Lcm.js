"use strict";
let value1 = 3;
let value2 = 5;
function findLcm(a, b) {
    let start = Math.max(a, b);
    for (let i = start; i < start * start; i += start) {
        if (i % a == 0 && i % b == 0) {
            console.log(`The LCM of ${a} and ${b} is ${i}`);
            break;
        }
    }
}
findLcm(value1, value2);
