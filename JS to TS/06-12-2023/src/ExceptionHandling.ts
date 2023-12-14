let forms: HTMLElement | null = document.getElementById('forms');

if (forms) {
    forms.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        try {
            let name: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement | null;
            let cars: HTMLSelectElement | null = document.getElementById('cars') as HTMLSelectElement | null;
            let total: HTMLInputElement | null = document.getElementById('totalkm') as HTMLInputElement | null;
            let coupon: HTMLInputElement | null = document.getElementById('promocode') as HTMLInputElement | null;

            if (!name || !cars || !total || !coupon) {
                throw new Error("Form elements not found");
            }

            let t: number = parseInt(total.value);

            if (isNaN(t)) {
                throw new Error("Invalid input for total distance");
            }

            let amount: number = 0;
            let selectedCars: string = "";

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
                let discount: number = amount * 0.10;
                let totalbill: number = amount - discount;
                alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\nYour Total bill amount is ${amount}\nOffer applied - ${discount}\n\nYour total bill is ${totalbill}`);
            } else {
                alert(`Your Name is ${name.value} and you have booked ${t} km with ${selectedCars}\nYour Total bill amount is ${amount}`);
            }

        } catch (error: any) {
            console.error("An error occurred:", error.message);
            alert(`An error occurred: ${error.message}`);
        }
    });
} else {
    console.error("Form element not found");
}