let users : {
    [key: number]: { [key: string]: string ; };
    
} = {}


        function div1() : void {
            console.log(users);
        
            let button = document.getElementById('submitCreate');
            const details = JSON.parse(localStorage.users);
        
            console.log(details);
        
            button!.addEventListener('click', () => {
                const id = document.getElementById("id") as HTMLInputElement | null;
                const name1 = document.getElementById("name") as HTMLInputElement | null;
                const password1 = document.getElementById("password") as HTMLInputElement | null;
                const email1 = document.getElementById("email") as HTMLInputElement | null;
                const phone1 = document.getElementById("phone") as HTMLInputElement | null;
        
                let ids: number = parseInt(id!.value);
                let name1s: string = name1!.value;
                let pass1s: string = password1!.value;
                let emails: string = email1!.value;
                let phones: string = phone1!.value;
        
                let flag = true;
        
                for (let i in details) {
                    if (ids == parseInt(i)) {
                        flag = false;
                    }
                }
        
                if (flag) {
                    const obj: {
                        [key: string]: string ;
                    } = {};
        
                    obj.name = name1s;
                    obj.password = pass1s;
                    obj.email = emails;
                    obj.phone = phones;
        
                    users[ids] = obj;
        
                    console.log(obj);
                    localStorage.setItem("users", JSON.stringify(users));
                    console.log(localStorage.users);
        
                    alert("Created");
                } else {
                    alert("ID already exists");
                }
            });
        }
        

        function div2() : void{

            console.log("worked")
            const button = document.getElementById('searchName')

            button!.addEventListener('click', ()=>{

                const available = document.getElementsByTagName('li')
                for(let i = available.length - 1; i>=0; i--){
                    available[i].remove()
                }


                const id = document.getElementById("idSearch") as HTMLInputElement | null
                const ids: string = id!.value
                const details = JSON.parse(localStorage.users) 

                let flag = true
                let ul = document.getElementById('ul') as HTMLUListElement | null
                for(let i in details){
                    if(i == ids){
                        flag = false
                        let li = document.createElement('li')
                        li.innerHTML = `Name: ${details[i].name} <br> Password: ${details[i].password}<br> Email: ${details[i].email} <br> Phone: ${details[i].phone} <br> <br>`
                        ul!.appendChild(li)
                        break
                    }
                }

                if(flag){
                    alert("id is not available")
                }
            })
           
        }

        
        function div3(): void{
            const button = document.getElementById('updateSubmit')

            button!.addEventListener('click' ,()=>{

                const id = document.getElementById('idSearch1') as HTMLInputElement 
                const select = document.getElementById('selectName') as HTMLInputElement
                const newValue = document.getElementById('newValue') as HTMLInputElement
                const details = JSON.parse(localStorage.users)
                let flag = true

                console.log(details)
                for(let key in details){
                    if(key == id.value){
                        details[key][select.value] = newValue.value
                        localStorage.setItem("users" ,JSON.stringify(details))
                        alert("Updated")
                        flag = false
                    }
                }
                if(flag){
                    alert("Id is not available")
                }

            })
        }


        function div4() : void{
            const button = document.getElementById('submitDelete')
            
            button!.addEventListener('click', ()=>{
                const id = document.getElementById('idDelete') as HTMLInputElement
                const details = JSON.parse(localStorage.getItem('users') ?? '[]')
                let flag = true

                for(let i in details){
                    if(i == id.value){
                        delete details[i];
                        localStorage.setItem('users', JSON.stringify(details));
                        alert("Id Deleted")
                        flag = false
                        break
                    }
                }
                if(flag){
                    alert("id not available")
                }
            })
        }


        function divFun(id: string) :void{
            if(id == "div1") div1()
            else if (id =="div2") div2()
            else if (id=="div3") div3()
            else if (id=="div4") div4()
        }

        let button = document.getElementsByClassName('btn')

        let buttonIds :{
            [index:string] : string
        } = {
            'create' : 'div1',
            'retrieve': 'div2',
            'update': 'div3',
            'delete': 'div4'
        }

        for(const element of button){
            element.addEventListener('click', () => {
                let id: string = element.id
                const div = document.getElementById(buttonIds[id]) as HTMLInputElement

                for(let x in buttonIds){
                    const y = document.getElementById(buttonIds[x]) as HTMLButtonElement
                    if(y.id == div.id){
                        y.style.display = 'block'
                        divFun(y.id)
                        console.log("clicked " + y.style.display)
                    }
                    else{
                        y.style.display = 'none'
                        console.log("not clicked " + y.style.display)
                    }
                }
            })
        }