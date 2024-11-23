//.map


const number = [1,2,4,6,8,]
const doubleNumbers= number.map(num=> num*2);
console.log("doubleNumbers",doubleNumbers)

const numbers = [1,2,4,6,8,]
const tripleNumbers= number.map(num=> num*3);
console.log("tripleNumbers",tripleNumbers)



//.filter

const evenNumber = number.filter(num => num %2 ===0);
console.log("evenNumber",evenNumber)
const oddNumber = number.filter(num => num%3 ===0);
console.log("oddNumber",oddNumber)

//reduce

const sum = number.reduce((acc,num) => 
    acc+num,0);
console.log("sum",sum)
const sub = number.reduce((acc,num) => 
    acc-num,0);
console.log("sub",sub)