let dept1: string[] = ['ram', 'jawa', 'hari']
let dept2: string[] = ['sam', 'mani', 'hema']
let dept3: string[] = ['raj', 'aarthika', 'rachel']
let dept4: string[] = ['karuppasamy', 'royston', 'anandh']

interface DepartmentId {
    1: string[]
    2: string[]
    3: string[]
    4: string[]
    [key: string]:string[]
}

let departmentId: DepartmentId = { 1: dept1, 2: dept2, 3: dept3, 4: dept4 }

let deptId = document.getElementById('deptId') as HTMLInputElement | null
let Button = document.getElementById('clickMe') as HTMLButtonElement | null
let Lists = document.getElementById('lists') as HTMLUListElement | null
let headings = document.getElementById('headings') as HTMLHeadElement | null

if (Button)
    Button.addEventListener('click', () => {
        const available = Lists!.getElementsByTagName('li')
        for (let i = available.length - 1; i >= 0 ;i--) {
            available[i].remove()
        }

        if (deptId!.value in departmentId && departmentId.hasOwnProperty(deptId!.value)) {
            let ids: string = deptId!.value
            let students = departmentId[ids]
            headings!.innerHTML = `The Department id ${deptId!.value} has ${students.length} students`
            for (let i of students) {
                let stud = document.createElement('li')
                stud.innerHTML = i
                Lists!.append(stud)
            }
        } else {
            alert('Department Does not Exist')
        }
    })
