let x=4;
let y=5;
console.log(x+y==9,
"sahi answer hai");
console.log(x+y==10,
"galat answer hai");


function askage(){
try{
    const age=parseInt(prompt('how old are you?'));
    if(isNan(age)){
        throw new error('Please enter a valid number');
    }
    if(age<0){
        throw new error('age can not be negative')
    }
    document.write('You are ${age} years old');
}catch(error){
console.log(`error:${error.message}`);
}
}
askage();
