let Fruits = ["Apple","Mango","Orange"];
Fruits[0]="Papaya";
Fruits[1]="Papaya";

Fruits.push("Coconut");
Fruits.pop("Banana");
Fruits.shift("Lichi");
Fruits.unshift("Pineapple");




console.log(Fruits);    
console.log(Fruits[0]);
console.log(Fruits[1]);
console.log(Fruits[2]);


let numOffFruits = Fruits.length;
let index = Fruits.indexOf("Orange");
console.log(numOffFruits);
console.log(index);

    