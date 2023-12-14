let student1Marks: number[] = [80, 75, 98, 93, 90]

let total1: number = 0
for(const element of student1Marks){
    total1 += element
}

let percentage: number = total1 / student1Marks.length

console.log(`The Percentage of Student1 is : ${percentage}`)
