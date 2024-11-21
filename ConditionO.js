//modules

//let a=20;
//let b=20;

//console.log(a%b);


//power

//let p=2;
//let q=5;

//console.log(p**q);

//Unary Operators

//let a=5;
//console.log(a++);
//console.log(++a);

//let b=5;
//c//onsole.log(b--);
//console.log(--b);


//Assignment Operators

let a=2;
let b=10;

//a=a+10;
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=10;
console.log(a);
a/=10;
console.log(a);


//Comparison Operators


console.log(10<5);
console.log(10>5);
console.log(10<=5);
console.log(10>=5);

console.log(5==5);
console.log('5'==5);
console.log(5===5);
console.log('5'===5);
console.log(5!==5);
console.log('5'!==5);



//Ternary Operators

let age=1;
let status1 = (age > 18)? 'I can vote' : 'I cannt vote';
console.log(status1);



//logical Oprators

let ans = (true&&true&&true)
console.log(ans);
let answ = (true&&true&&false)
console.log(answ)

let anss = (false||false||false)
console.log(anss);
let answs = (true||true||false)
console.log(answs);

let anssss= (!false)
console.log(anssss);

//conditional

let ages=4;
if(ages>=18){
    console.log('can vote')
}
else{
    console.log('cannot vote')
}

let agess=20;
if(agess>=18){
    console.log('can vote')
}


let number=5;

if(number==1){
    console.log('A');
}
else if(number==2){
    console.log('B');
}
else if(number==3){
    console.log('C');
}
else if(number==5){
    console.log('D');
}
else{
    console.log('F');
}

let numbers=5;

if(numbers==1){
    console.log('A');
}
else if(numbers==2){
    console.log('B');
}
else if(numbers==3){
    console.log('C');
}
else{
    console.log('F');
}


//switch

let num=3;

switch(num) {
    case 1: console.log('a');
    break;
    case 2: console.log('b');
    break;
    case 5: console.log('d');
    break;
    case 4: console.log('e');
    break;
    default: console.log('f');

}
