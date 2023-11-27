const myArr = [0,1,2,3,4,5]
//javascript arrays are resizable and can contain a mix of diiferent datatypes


console.log(myArr[2]);
//console.log("one");  not right way 
// javascript array are noty associative


//shallow copy 
//a shaloow copy of an object is a copy whose properties share the same refrenece (point to the same uderlying values ) 
//as those of the source object from which the copy was made 


//deep copy 
//a deep copy of an object isa copty whose properties do not share the same refrence (point to the same underlying values )
//as those of the source object from which the copy was made 
// as a result when u change either the source or the copy u can assured u r'not causing the other object to change to


const myHeros = ["marvels","harrypoter"]
const myArr2 = new Array (1,2,3,4);

//arrays method

myArr.push(6)

console.log(myArr
);

myArr.pop();
console.log(myArr);


myArr.unshift(9);
console.log(myArr);


myArr.shift();
console.log(myArr);


console.log(myArr.includes(9));

console.log(myArr.indexOf(19));

console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);

console.log(newArr);

//slice and Splice 

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);

console.log("C",myArr);



