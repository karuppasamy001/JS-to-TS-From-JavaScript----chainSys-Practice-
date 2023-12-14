// Clear localStorage
localStorage.clear();

// Store data in localStorage
localStorage.setItem('userName', 'Karuppasamy');
localStorage.setItem('userId', '917722013');

// Retrieve data from localStorage
const userName: string | null = localStorage.getItem('userName');
let userId: string | null | number = localStorage.getItem('userId');

console.log("userName : " + userName);
console.log("userId : " + userId);

// Convert userId string to number
userId = Number(userId);
console.log("userId to Number : " + typeof(userId) + userId);

// Short syntax to get data from localStorage
const userName1: string | null = localStorage.userName;
const userId1: string | null = localStorage.userId;

console.log("(shortForm) userName : " + userName1);
console.log("(shortForm) userId : " + userId1);

// Remove an item from localStorage
const key: string = 'userName';
localStorage.removeItem(key);
console.log("After removing username " + localStorage.userName);

// Remove all items from localStorage
localStorage.clear();
console.log("After removing all " + localStorage.userId);

// Store username and userId in localStorage as an object
let obj = {
    'userName': 'Karuppasamy',
    'password': 'pass001',
};

let objs: string = JSON.stringify(obj);

localStorage.setItem('userDetails', objs);

// Displaying data in localStorage
const newObj = JSON.parse(localStorage.userDetails);
console.log(newObj);
console.log(localStorage.userDetails);

// Create a user array and store user data; store the user array in localStorage
let arr = [
    { 'name': 'John', 'age': 25 },
    { 'name': 'Jane', 'age': 30 },
];
let arrs: string = JSON.stringify(arr);
localStorage.setItem('users', arrs);

// Display the stored users array
let usersArr: { name: string; age: number; active?: number }[] = JSON.parse(localStorage.getItem('users') ?? '[]');
for (const user of usersArr) {
    console.log("name = " + user.name + " Age = " + user.age);
}

// Add users to existing localStorage
usersArr.push({ 'name': 'peter', 'age': 32 });
localStorage.setItem("users", JSON.stringify(usersArr));

// Display users after adding new users
let newArr: { name: string; age: number; active?: number }[] = JSON.parse(localStorage.users);

// Search for a user given input
let Search: { name: string; age?: number } = { name: 'peter', age: 32 };

for (const user of newArr) {
    if (Search.name == user.name) {
        console.log("Available");
    }
}

// Multiple input Search
let Searchs: ({ name: string; age?: number })[] = [
    { name: 'karuppasamy', age: 27 },
    { name: 'John', age: 25 },
    { name: 'peter', age: 32 },
];

for (const item of Searchs) {
    let flag = true;
    for (const user of newArr) {
        if (item.name == user.name && item.age == user.age) {
            console.log(`${item.name} is available`);
            flag = false;
        }
    }
    if (flag) {
        console.log(`${item.name} is not available`);
    }
}

// Update specific data in localStorage
for (const user of newArr) {
    if (user.name == 'peter') {
        user.name = 'rick';
    }
}

localStorage.setItem('users', JSON.stringify(newArr));
console.log(localStorage.users);

// Adding a new field in localStorage 'active' and sets to 0
for (const user of usersArr) {
    (user as { active?: number }).active = 0;
}

localStorage.setItem('users', JSON.stringify(newArr));
console.log(localStorage.users);

// Update active field from 0 to 1 for users who have age < 30
for (const user of newArr) {
    if (user.age && user.age < 30) {
        (user as { active?: number }).active = 1;
    }
}

localStorage.setItem('users', JSON.stringify(newArr));
console.log(localStorage.users);
