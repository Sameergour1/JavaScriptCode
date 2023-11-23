let myYoutubename = "sameer.com"
let anotherName = myYoutubename
anotherName = "chaiWith Sameer"
console.log(anotherName);

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "useer@ybl"
}

let userTwo = userOne
userTwo.email = "sameer@google.com"
console.log(userOne.email);
console.log(userTwo.email);

//primitive value like boolean ,number  are goes in stack where a copy of that datatype variable goes there 

//whereas value like array and other goes in heap where a real reference of that datatype variable values  goes nd we can change it by assigning the new value to it