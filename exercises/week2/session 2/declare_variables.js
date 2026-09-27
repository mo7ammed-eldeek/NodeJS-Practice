"use-strict";

let a , b;

res =  a && b ; 


let hour = 12 
,   min  = 30 ; 

if (hour == 12  && min == 30 ) {
    console.log("the time is ",hour,":",min )
};



// not convert the op to T/F values and its inverse ;

let value = 2;

console.log(value);
value = !value;
console.log(value);


console.log("\n")
// !! convert to 


let t = "true"; // true
let f = "" ; // fasle 

console.log(!t); //false
console.log(!f); // ture


// false >> !f >> true >> !f >> false
console.log(!!f) // false 
console.log(!!t) // true




console.log(console.log(1) */ returns undefined */ || 2 || console.log(3) );



console.log (console.log(1) && 0 );


// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.


let age = 88;

if (age >= 14 && age <= 90  ) {
    console.log("Age");
    console.log(!0);
};





///////


// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

/*
  على الاقل 14 
  واخره 90

*/

age = 20;
if (!(age >= 14 && age <= 90)){
    console.log(age,"not between 14 and 90")
}

/* 
ال or بتدور ع اقرب 
truthy value 
لو العمر اكبر من 90 او اقل من 14 
 
*/
if (age <=14 || age >= 90 || 0){
    console.log(age,"not between 14 and 90")
}

///    T/f  >>  exectue
if (-1 || 0) console.log( 'first' ,Boolean(-1 || 0 ));


///    T/f  >>  exectue
if (-1 && 0) console.log( 'sec' ,Boolean(-1 && 0 ));
///    T/f  >>  exectue
if (null || -1 && 1) console.log( 'third' ,Boolean(null || -1 && 1 ));
        