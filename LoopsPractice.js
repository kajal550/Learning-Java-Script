// // // let marks = [76,98,76,93,66];
// // // console.log(marks);
// // // console.log(marks.length);


// // // let heroes = ["Thor","Hulk","Shaktiman","Ironman","Antman","Ninja"];
// // // console.log(heroes);
// // // console.log(heroes.length);  


// // let hero = ["Thor","Hulk","Shaktiman","Ironman","Antman","Ninja"];
// // // for(let i=0; i<hero.length; i++) { 
// // //     console.log(hero[i]);
// // // }

// // for (let heroes of hero) {
// //     console.log(heroes);
// // }

// let cities = ["delhi","pune","mumbai","chennai"]; {
//     for (let city of cities);
//     console.log(cities);
// }



let marks = [59,98,87,98,76];
let sum = 0;
for (let val of marks) {
    sum+=val;
}  

console.log(sum); 


let avg = sum/marks.length;
console.log(`avg marks of the class= ${avg}`);