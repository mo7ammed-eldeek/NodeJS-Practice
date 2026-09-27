"use-strict";


/* funtions types
1. declration 
2. expression
3. self-invoking
4. anonymous 
5. arrow function


*/ 

// declaration 
function sayHi(name){
console.log("hi"+name);

}


// console.log(sayHi(" name")/* print in consloe "S" and retrun undefiend to console.log funtions as a param so .log print undefiend */);


// console.log("first " +console.log("second fucntion runs first and return undefined"));

function sayh(name){
return console.log("hi" + name)/* print hi mohammed 1st */, 1 /* one ignored */ , console.log(2) , console.log(3) /* one returnd value: return undefined */; 
};
// let xx = sayh("mohammed");
// console.log(xx)



function printName (name){
return console.log
}


// let x = printName()(1); // retrun console.log function;

// console.log(x);

console.log("\n=========");


function add (a){
return function(b){
return a + b ;
};
}

let a = add(2)(3);
console.log(a);


let num1 = add(3); // return annomous funcution
let num2 = 1 + num1(2) // last is printing
console.log(num2);



function f() {
return console.log("called"); // retun undefind   // note: console.log(1) is CALLED here
}
// f()(2);   // ❌ TypeError: f(...) is not a function



// undefined(1) ? not a function error!


function res(name){
return console.log;

}

/// var as a function ✅
let result = res();

console.log(typeof result + "xxx"); // undefined bc name 

result(1); // works!! 


// 



callMe();
function callMe(param){
console.log("works Great! declartion");
}




// experession funtion
/*
let & Identifier = declaration function >>>...<<<
function (param){
console.log("works Great!");
}

*/

let callMes = function (param){
console.log("works Great! exp");
}

callMes();

