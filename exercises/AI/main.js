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
mySet.add(1)
mySet.add(1)
mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add(2)
mySet.add(2)
mySet.add(2)
mySet.add(2)
mySet.add(2)
mySet.add(3)

let fv= [...mySet]
console.log(fv);


// console.log(mySet.size);

// console.log(mySet);
// mySet = Array.from(mySet)
// console.log(mySet);



// const products = [{name:'phone', price:100}, {name:'case', price:20}];


// console.log(
//     ({...products})
// );
// const withTax = products.map(p => ({ ...p, tax: p.price * 0.14 }));
// console.log(withTax);





// const priceUSD = [10,20,30];
// const pirecEgp = priceUSD.map(n =>(n * 48))
// console.log(pirecEgp);

// What's the difference between map and forEach?
// ? idk 
// ! map ---chainable -->  transfrom data and get something back. >> convert units add tax (computed field)
// ! foreach ---> sideEffect to each item. << log (debugging) array.foreach(callback fn)
// const priceUSD = [10,20,30];
// const pirecEgp = priceUSD.map(n =>(n * 48))
// console.log(pirecEgp);

// [1,2,3].forEach(n => (console.log("processig",n)));
// returns undefined — nothing to collect
// 3. Write to database





// What does sort() do to strings vs numbers, and how do you fix it?
// ? idk 
uniuqe = [];
let numbs = [3,20,4,10].sort((a,b)=> {
    console.log(`${a} - ${b} = ${a-b} `);
    return a-b;
});
console.log(uniuqe);

console.log(numbs);

//Why shouldn't you use for...in on arrays?
// ? idk 
// bc it loop on indeices 
// 

let a = "apple";
let b = "bananna";

console.log(a.localeCompare(b)); // negative -1 >> (a) before (b)


let x= [1,2,3,5,6].reduce((x,u) => x+u,0);
console.log(x);


// https://leo-ai.brave.app/shared/f5e83744-20e9-4f60-ad05-ef6d218c7d49#jRp8VIBaOso0-AIjlGRyKaQvppH1nsC9o7j2mzjusmM