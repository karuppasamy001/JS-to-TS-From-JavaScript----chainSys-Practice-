let value1: number = 3
let value2: number = 5

function findLcm(a: number, b: number){
    let start: number = Math.max(a, b)
    for(let i = start; i < start*start; i += start){
        if(i % a == 0 && i % b == 0){
            console.log(`The LCM of ${a} and ${b} is ${i}`)
            break
        }
    }

}

findLcm(value1, value2)