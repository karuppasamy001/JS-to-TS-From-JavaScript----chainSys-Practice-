// student 1

let maths: number = 80
let tamil: number = 75
let science: number = 90
let english: number = 95
let social: number = 89

let total = maths + tamil + science + english + social

// to find pass or fail

if(maths > 40 && tamil > 40 && science > 40 && english > 40 && social > 40){
    console.log("All subjects are passed")
}
else{
    console.log("The Student is Fail")
}

// to find grade

if(total >= 450){
    console.log("Grade A+" + " Total : " + total)
}
else if(total >= 400){
    console.log("Grade A" + " Total : " + total)
}
else if(total >= 350){
    console.log("Grade B+" + " Total : " + total)
}
else if(total >= 300){
    console.log("Grade B" + " Total : " + total)
}
else{
    console.log("Grade C" + " Total : " + total)
}



