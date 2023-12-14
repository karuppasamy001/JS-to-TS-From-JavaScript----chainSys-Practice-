let a : number = 5
let b : number = 10

console.log("The value a is : " + a) // 5
console.log("The value b is : " + b) // 10

a += b
b = a - b
a -= b

console.log("After Swap")

console.log("The value a is : " + a) // 10
console.log("The value b is : " + b) // 5