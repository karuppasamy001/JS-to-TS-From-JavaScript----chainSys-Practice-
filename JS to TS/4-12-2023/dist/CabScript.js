"use strict";
let forms = document.getElementById('forms');
if (forms) {
    forms.addEventListener('submit', (fare) => {
        fare.preventDefault();
        let name = document.getElementById('name');
        let cars = document.getElementById('cars');
        let total = document.getElementById('totalkm');
        let coupon = document.getElementById('promocode');
        if (name && cars && total && coupon) {
            let t = parseInt(total.value);
            let amount = 0;
            let selectedCars = "";
            switch (cars.value) {
                case "car1":
                    amount = t * 10;
                    selectedCars = 'Micro';
                    break;
                case "car2":
                    amount = t * 15;
                    selectedCars = 'Mini';
                    break;
                case "car3":
                    amount = t * 25;
                    selectedCars = 'Prime';
                    break;
            }
            if (coupon.value === 'FIRSTRIDE') {
                let discount = amount * 0.10;
                let totalbill = amount - discount;
                alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\n your Total bill amount is ${amount}\n offer applied      - ${discount}\n\n Your total bill is ${totalbill}`);
            }
            else {
                alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\n your Total bill amount is ${amount}`);
            }
        }
    });
}
