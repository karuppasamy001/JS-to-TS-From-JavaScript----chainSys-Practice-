function findUnique(arr: number[]){
    let unique: number[] = []
    for (let i of arr){
        if (!unique.includes(i)){
            unique.push(i)
        }
    }

    return unique

}

let array: number[] = [2,3,4,5,6,7,4,2,5,9,1,2,3,6,10,20,1,11,19,118,11,1]
console.log(array)
console.log("The Array After Removing Duplicate")
console.log(findUnique(array))
