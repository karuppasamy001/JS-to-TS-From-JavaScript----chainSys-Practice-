"use strict";
let dept1 = ['ram', 'jawa', 'hari'];
let dept2 = ['sam', 'mani', 'hema'];
let dept3 = ['raj', 'aarthika', 'rachel'];
let dept4 = ['karuppasamy', 'royston', 'anandh'];
let departmentId = { 1: dept1, 2: dept2, 3: dept3, 4: dept4 };
let deptId = document.getElementById('deptId');
let Button = document.getElementById('clickMe');
let Lists = document.getElementById('lists');
let headings = document.getElementById('headings');
if (Button)
    Button.addEventListener('click', () => {
        const available = Lists.getElementsByTagName('li');
        for (let i = available.length - 1; i >= 0; i--) {
            available[i].remove();
        }
        if (deptId.value in departmentId && departmentId.hasOwnProperty(deptId.value)) {
            let ids = deptId.value;
            let students = departmentId[ids];
            headings.innerHTML = `The Department id ${deptId.value} has ${students.length} students`;
            for (let i of students) {
                let stud = document.createElement('li');
                stud.innerHTML = i;
                Lists.append(stud);
            }
        }
        else {
            alert('Department Does not Exist');
        }
    });
