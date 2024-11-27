// const details = {
//     FirstName: "Kajal",
//         LastName: "Agarwal",
//         Age: 27,
//         username: "makekajal",
//         password: "wesksnco",
// }

// const datarray = Object.entries(details);

// for(i=0;i<=datarray.length; i++) {
//     console.log(datarray[i]);
// }

// let dataarray= [];


// for (key in details){
//     let entry = [];
//     entry.push(key);
//     entry.push (details[key]);
//     dataarray.push(entry);
// }

// console.log(dataarray); 

addedStudents=[];

const students =
[
    {
    "name":"abc",
    "marks":50,
},
{
    "name":"Kajal",
    "marks":60,
},
{
    "name":"Glory",
    "marks":10,
}]  

students.forEach(student => {
    if (student.marks >= 50) {
    addedStudents.push(student.name);
    }
  });


  console.log(addedStudents);



