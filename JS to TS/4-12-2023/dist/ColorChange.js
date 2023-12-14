"use strict";
let button = document.getElementById('clickMe');
let para = document.getElementById('para');
let i = 0;
if (button) {
    button.addEventListener('click', (red) => {
        let a = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        let c = Math.ceil(Math.random() * 255);
        let colors = `rgb(${a}, ${b}, ${c})`;
        if (para)
            para.style.color = colors;
    });
}
