"use strict";
let users = {};
function div1() {
    console.log(users);
    let button = document.getElementById('submitCreate');
    const details = JSON.parse(localStorage.users);
    console.log(details);
    button.addEventListener('click', () => {
        const id = document.getElementById("id");
        const name1 = document.getElementById("name");
        const password1 = document.getElementById("password");
        const email1 = document.getElementById("email");
        const phone1 = document.getElementById("phone");
        let ids = parseInt(id.value);
        let name1s = name1.value;
        let pass1s = password1.value;
        let emails = email1.value;
        let phones = phone1.value;
        let flag = true;
        for (let i in details) {
            if (ids == parseInt(i)) {
                flag = false;
            }
        }
        if (flag) {
            const obj = {};
            obj.name = name1s;
            obj.password = pass1s;
            obj.email = emails;
            obj.phone = phones;
            users[ids] = obj;
            console.log(obj);
            localStorage.setItem("users", JSON.stringify(users));
            console.log(localStorage.users);
            alert("Created");
        }
        else {
            alert("ID already exists");
        }
    });
}
function div2() {
    console.log("worked");
    const button = document.getElementById('searchName');
    button.addEventListener('click', () => {
        const available = document.getElementsByTagName('li');
        for (let i = available.length - 1; i >= 0; i--) {
            available[i].remove();
        }
        const id = document.getElementById("idSearch");
        const ids = id.value;
        const details = JSON.parse(localStorage.users);
        let flag = true;
        let ul = document.getElementById('ul');
        for (let i in details) {
            if (i == ids) {
                flag = false;
                let li = document.createElement('li');
                li.innerHTML = `Name: ${details[i].name} <br> Password: ${details[i].password}<br> Email: ${details[i].email} <br> Phone: ${details[i].phone} <br> <br>`;
                ul.appendChild(li);
                break;
            }
        }
        if (flag) {
            alert("id is not available");
        }
    });
}
function div3() {
    const button = document.getElementById('updateSubmit');
    button.addEventListener('click', () => {
        const id = document.getElementById('idSearch1');
        const select = document.getElementById('selectName');
        const newValue = document.getElementById('newValue');
        const details = JSON.parse(localStorage.users);
        let flag = true;
        console.log(details);
        for (let key in details) {
            if (key == id.value) {
                details[key][select.value] = newValue.value;
                localStorage.setItem("users", JSON.stringify(details));
                alert("Updated");
                flag = false;
            }
        }
        if (flag) {
            alert("Id is not available");
        }
    });
}
function div4() {
    const button = document.getElementById('submitDelete');
    button.addEventListener('click', () => {
        var _a;
        const id = document.getElementById('idDelete');
        const details = JSON.parse((_a = localStorage.getItem('users')) !== null && _a !== void 0 ? _a : '[]');
        let flag = true;
        for (let i in details) {
            if (i == id.value) {
                delete details[i];
                localStorage.setItem('users', JSON.stringify(details));
                alert("Id Deleted");
                flag = false;
                break;
            }
        }
        if (flag) {
            alert("id not available");
        }
    });
}
function divFun(id) {
    if (id == "div1")
        div1();
    else if (id == "div2")
        div2();
    else if (id == "div3")
        div3();
    else if (id == "div4")
        div4();
}
let button = document.getElementsByClassName('btn');
let buttonIds = {
    'create': 'div1',
    'retrieve': 'div2',
    'update': 'div3',
    'delete': 'div4'
};
for (const element of button) {
    element.addEventListener('click', () => {
        let id = element.id;
        const div = document.getElementById(buttonIds[id]);
        for (let x in buttonIds) {
            const y = document.getElementById(buttonIds[x]);
            if (y.id == div.id) {
                y.style.display = 'block';
                divFun(y.id);
                console.log("clicked " + y.style.display);
            }
            else {
                y.style.display = 'none';
                console.log("not clicked " + y.style.display);
            }
        }
    });
}
