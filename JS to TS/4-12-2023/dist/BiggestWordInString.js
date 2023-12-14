"use strict";
let word = "The quick brown fox jumps over the lazy dog";
let lists = word.split(" ");
let size = [];
for (let i of lists) {
    size.push(i.length);
}
let maxi = Math.max(...size);
for (let i of lists) {
    if (i.length == maxi) {
        console.log(i);
        break;
    }
}
