"use strict";
let student1Marks = [80, 75, 98, 93, 90];
let total1 = 0;
for (const element of student1Marks) {
    total1 += element;
}
let percentage = total1 / student1Marks.length;
console.log(`The Percentage of Student1 is : ${percentage}`);
