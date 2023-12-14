"use strict";
let forms = document.getElementById('forms');
if (forms) {
    forms.addEventListener('submit', (event) => {
        event.preventDefault();
        try {
            let name = document.getElementById('name');
            let cars = document.getElementById('cars');
            let total = document.getElementById('totalkm');
            let coupon = document.getElementById('promocode');
            if (!name || !cars || !total || !coupon) {
                throw new Error("Form elements not found");
            }
            let t = parseInt(total.value);
            if (isNaN(t)) {
                throw new Error("Invalid input for total distance");
            }
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
                default:
                    throw new Error("Please Select The cars");
            }
            if (coupon.value === 'FIRSTRIDE') {
                let discount = amount * 0.10;
                let totalbill = amount - discount;
                alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\nYour Total bill amount is ${amount}\nOffer applied - ${discount}\n\nYour total bill is ${totalbill}`);
            }
            else {
                alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\nYour Total bill amount is ${amount}`);
            }
        }
        catch (error) {
            console.error("An error occurred:", error.message);
            alert(`An error occurred: ${error.message}`);
        }
    });
}
else {
    console.error("Form element not found");
}
