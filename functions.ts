/*
User defined function
   
   1. function without parameter & without return type 
   2. function with parameter & without return type 
   3. function without parameter & with return type
   4. function with parameter & with return type  

*/

//1. function without parameter & without return type 

function add1(){

    console.log("U r in first type function");
}

add1();

//2. function with parameter & without return type 

function add2(a:number,b:number){
   
    console.log("Addition : "+(a+b));
}

add2(10,2);

// 3. function without parameter & with return type

function add3():number{
    return (8+8);
}

let res=add3();
console.log("Result is "+res);

// 4. function with parameter & with return type  

function add4(a:number,b:number):number{
    return (a+b);
}

console.log(`Addition is ${add4(10,4)}`);


/*

Anonymous Function
    - Don't have any name
    - it execute logic there itself

*/

//1. function without parameter & without return type 

let a1 = function(){

    console.log("Anonymous function is called");
}
a1();

//2. function with parameter & without return type 

let a2 = function(a:number){

    console.log(`Square of ${a}: ${a*a}`);
}

a2(9);

// 3. function without parameter & with return type

let a3 = function():any{

    return ("Value of 10*10 "+(10*10));
}

console.log(a3());

// 4. function with parameter & with return type

let a4 = function(a:number,b:string):any{

    return(a+b);
}

console.log(a4(10,'a'));


//Fat arrow function/ Arrow function 

//1. function without parameter & without return type 

 a1 = ()=>{

    console.log("Arrow function is called");
}

//2. function with parameter & without return type 

 a2 = (a:number)=>{

    console.log(`Cube of ${a}: ${a*a*a}`);
}

a2(9);

// 3. function without parameter & with return type

 a3 = ():any=>{

    return ("Value of 11*11 "+(11*11));
}

console.log(a3());

// 4. function with parameter & with return type

 let a5 = (a:string,b:boolean):any=>{

    return(a+b);
}

console.log(a5("1",true));









