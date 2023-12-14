"use strict";
let buttons = document.getElementById('clickMe');
let names = document.getElementById('name');
let valid = document.getElementById('h');
if (buttons)
    buttons.addEventListener('click', () => {
        const regex = /^[a-zA-Z_0-9]+$/;
        if (names && valid) {
            if (regex.test(names.value) && names.value.length >= 4 && names.value.length <= 16) {
                valid.innerHTML = 'Valid Username';
            }
            else {
                valid.innerHTML = 'Invalid Username';
            }
        }
    });
