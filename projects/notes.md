- js allways return undefined from the funtions even nothing returns;

- function return **one value** only but can return call fuctions like console .log 

```javascript
function sayh(name){
return console.log("hi" + name)/* print hi mohammed 1st */, 1 /* one ignored */ , console.log(2) , console.log(3) /* one returnd value: return undefined */; 
};
let x = sayh("mohammed");
console.log(x)

```
- Retrun a function from a function 

```javascript
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

```
# انواع ال functions :
1. declaration funtion
-- why ? 
  i can *Call*  it before declaration!  
```javascript
callMe();
function callMe(param){
    console.log("done");
}


``` 

2. exp same with indenitfer let, var . = function(){}
-- why? to control flow of code!
```javascript

let callMes = function (param){
    console.log("works Great! exp");
}

callMes();

```

3. anonmous function same as exp whithout identifiers(var , let , x , = etc)
# ملهاش اسم
-- why ? 
```javascript
function (anon){
    console.log("works Great! anon");
}
```


4. arrow function
-- why?? short syntax , problem with this 


```md
let arrow = ~~function~~ ~~(~~ param ~~)~~ **=>**  // logic of code ~~{ ~~
     ~~return~~ // logic of code
~~}~~
``` 

```javascript
let num = param => Number(param);   
```


5. self invoed function
```c
-- its anonmous function ({logic of code "Welcome!" }) كدا انا ماسكها 
  (); - calling it 
```




