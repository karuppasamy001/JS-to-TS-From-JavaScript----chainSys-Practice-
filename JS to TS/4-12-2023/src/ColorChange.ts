

let button = document.getElementById('clickMe') as HTMLButtonElement | null
let para = document.getElementById('para') as HTMLParagraphElement | null

let i: number = 0

if(button){
    button.addEventListener('click', (red: Event) => {
        let a:number = Math.ceil(Math.random()*255)
        let b:number = Math.ceil(Math.random()*255)
        let c:number = Math.ceil(Math.random()*255)

        let colors:string = `rgb(${a}, ${b}, ${c})`
        if(para) para.style.color = colors;  
    })
}
