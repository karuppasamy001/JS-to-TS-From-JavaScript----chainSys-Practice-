// let arr = [2, 5, 9, 14, 7, 19, 23, 3, 4, 35, 60]
// let arr = [2, 3, 10, 9, 7, 3, 6, 4, 10, 8, 1]
let arr: number[] = [10, 20, 10, 20, 10, 25, 10]

let currentMax: number = 0
let maxDifference: number = 0

for(let i = 0; i < arr.length; i ++){
    for(let j = i; j < arr.length; j ++){
        if(arr[i] < arr[j] && arr[i] != arr[j]){
            currentMax = arr[j] - arr[i]
        }

        if(currentMax > maxDifference){
            maxDifference = currentMax
        }
    }
}

console.log(maxDifference)