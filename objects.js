//OBJECTS


const student = {
    names:"Kajal",
    age: 21,
    dep: "zoo",
}

//to return the object queue

console.log(Object.keys(student));

//to return the object value

console.log(Object.values(student));


//to return the key-value pairs of the object

for (const [prop,val] of Object.entries (student)){
    console.log(`${prop}: ${val}`);
}


//example 2 

const person={
    firstname: "kajal",
    lastname: "goyal",
    age:28,
    isEmployed:true,
    sayHello: function(){console.log("Hi! I am pooja")},
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isEmployed);

person.sayHello();



const person1={
    firstname: "priya",
    lastname: "goyal",
    age:29,
    isEmployed:false,
    sayHello: function(){console.log("Hi! I am mamta")},
}


console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();



