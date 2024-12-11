x=2;
y=2;

if(x==y){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}

console.log(x==y? "equal" : "Not Equal")

function getfee(item) {
    return item == 'tea'? '10rs' : '20rs'
}

console.log(getfee('tea'));



function getfee(item) {
    let mrp='';
    mrp = item == 'tea'? '10rs'
    : item == 'coffee'? '10rs'
    : item == 'Kurkure'? '10rs'
    : item == 'biscuit'? '10rs'
    : 'out of stock'

    return mrp;
}
 
console.log(getfee('boost')) 
console.log(getfee('milk'))
console.log(getfee('coffee'))

let age=3;

let message;

if(age>=18){
    message = ("You are an adult")
}
else{
    message = ("You are not an adult")
}

console.log(age,message);

let time = 12;
let greeting = time < 12 ? "Good Morning": "Good Afternoon";
console.log(greeting);
