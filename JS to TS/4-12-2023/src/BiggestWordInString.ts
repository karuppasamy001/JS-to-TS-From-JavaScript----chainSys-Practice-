let word:string = "The quick brown fox jumps over the lazy dog"

let lists: string[] = word.split(" ")
let size: number[] = []

for(let i of lists){
    size.push(i.length)
}

let maxi:number = Math.max(...size)
for(let i of lists){
    if (i.length == maxi) {
        console.log(i)
        break
    }
}