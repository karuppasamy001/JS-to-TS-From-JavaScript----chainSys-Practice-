"use strict";
let str = 'The quick brown fox jumps over the lazy dog';
let list = str.split(" ");
let modifiedStr = "";
for (let i of list) {
    modifiedStr += i.charAt(0).toUpperCase() + i.slice(1) + " ";
}
console.log(modifiedStr);
