let marks=20;
console.log(marks);

//add,sub,multiply,div

let p=10;
let q=20;
console.log(p+q);
console.log(p-q);
console.log(p*q);
console.log(p/q);

let spelling="Kajal"
console.log(spelling);


//boolean

marks =true;
console.log(typeof (marks));


//undefined

let names;
console.log(names);

//null

let school=null;
console.log(school);

//Bigint

let numbers=235545.454542
console.log(numbers);

//symbol

let mySymbol=Symbol("description");
console.log(mySymbol);

let email=Symbol();
let employee={};
employee.name='john';
employee.age='53';
employee[email]='test@test.com';
console.log(Object.keys(employee));

for (const key in employee){
    console.log(key);
}

console.log(employee[email]);
console.log(employee)