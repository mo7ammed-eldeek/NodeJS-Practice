// @ts-nocheck
const users = [
  { name: "ali", age: 20 },
  { name: "sara", age: 17 },
];

//get an array[map,filter] of names of only adults.

let adults = users.filter((person)=> (person.age >= 18));
console.log(adults);

let teen = users.filter((person) => person.age < 18);

console.log(teen);

// Turn 'a,b,c' into ['a','b','c'], and back again.
let s = 'a,b,c'; // ?

// @ts-ignore
s = s.split(',')
console.log(s);
// @ts-ignore
s = s.join(',')
console.log(s);


//Get the last item of an array two different ways.
const arr = [1,2,3,4,5];

console.log(arr[arr.length-1]);
console.log(arr.at(-1));

console.log("");

// ?

// Remove duplicates from [1,1,2,3,3,3].


let d = [1,1,1,1,1,2,3,3,3];
let i = 0;
var uniuqe= [];
d.forEach(element => {
    i++//                    i= d[2] = 2
    console.log(`is element: ${element} == ${d[i]} ? itertation ${i}`);
    if (element == d[i]) 
        
        return;
        uniuqe.push(element)
        console.log("retrun",element);
        
    }

);
// console.log(uniuqe);



let uniuqeArr = [];

d.forEach((element,indx,arr) => {
    // console.log(arr);
    // compare element مع اللي قبله
    // لو العنصر مش موجود ف مصفوفه 2 اعمله push
    // includes
    if (uniuqeArr.includes(element)) {
        return
    }
    else{
        uniuqeArr.push(element)
    }
});
console.log(uniuqeArr);


// another appraoch  set 

// Array.from(s)

let mySet = new Set();
mySet.add(1)
mySet.add(2)

console.log(mySet.size);

console.log(mySet);
mySet = Array.from(mySet)
console.log(mySet);






// What's the difference between map and forEach?
// ? idk 

// What does sort() do to strings vs numbers, and how do you fix it?
// ? idk 
//Why shouldn't you use for...in on arrays?
// ? idk 