interface StudentMarks {
    usernames: string
    password?: string
}

type Students = Record < string, StudentMarks > 

let studentMarks: Students = {}

let names: string[] = ['student1', 'student2', 'student3']
let usernames: string[] = ['one1', 'two2', 'three3']
let passwords: string[] = ['111', '222', '333']

// creating property

for(let i = 0; i < names.length; i++){
    studentMarks[names[i]] = {
        usernames: usernames[i],
        password: passwords[i]
    }
}

console.log("    json creating     ")
console.log(studentMarks)

// deleting property

delete studentMarks.student1.password
console.log("    json deletion     ")
console.log(studentMarks)

// converting json to string

const stringOfJson = JSON.stringify(studentMarks) 
console.log("    json to string     ")
console.log(stringOfJson)

// converting string to json

const jsonOfString = JSON.parse(stringOfJson) as Students
console.log("    string to json     ")
console.log(jsonOfString)