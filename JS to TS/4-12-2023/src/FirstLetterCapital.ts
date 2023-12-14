let str:string = 'The quick brown fox jumps over the lazy dog'
let list: string[] = str.split(" ")
let modifiedStr: string = ""

for(let i of list){
    modifiedStr += i.charAt(0).toUpperCase() + i.slice(1) + " "
}

console.log(modifiedStr)