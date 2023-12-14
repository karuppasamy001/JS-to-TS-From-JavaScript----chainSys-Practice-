const button_1 = document.getElementById('clickMe') as HTMLButtonElement | null
const img = document.getElementById('img') as HTMLImageElement | null

fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME").then( x => x.json()).then(x =>{
    let count = 0
    button_1!.addEventListener('click', ()=>{
        

        img!.src = x[count].url
        count += 1    


    })    
    
})