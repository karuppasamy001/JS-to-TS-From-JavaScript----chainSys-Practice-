let forms: HTMLElement | null = document.getElementById('forms')

if(forms){
    forms.addEventListener('submit', (fare: Event) => {
    fare.preventDefault();
    let name: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement | null
    let cars: HTMLSelectElement | null = document.getElementById('cars') as HTMLSelectElement | null
    let total: HTMLInputElement | null = document.getElementById('totalkm') as HTMLInputElement | null
    let coupon: HTMLInputElement | null = document.getElementById('promocode') as HTMLInputElement | null
    
    if(name && cars && total && coupon){
        let t: number = parseInt(total.value)
        let amount: number = 0
        let selectedCars: string = ""
    
        switch(cars.value){
            case "car1":
                amount = t * 10
                selectedCars = 'Micro'
                break
            case "car2":
                amount = t * 15
                selectedCars = 'Mini'
                break
            case "car3":
                amount = t * 25
                selectedCars = 'Prime'
                break
                        
        }
            
     
        if(coupon.value === 'FIRSTRIDE'){
            let discount: number = amount*0.10;
            let totalbill: number = amount - discount
            alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\n your Total bill amount is ${amount}\n offer applied      - ${discount}\n\n Your total bill is ${totalbill}`)
    
        }
        else{
            alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\n your Total bill amount is ${amount}`)
    
        }
    }

    });
}
        