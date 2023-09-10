/*
 DataTypes in Typescript:
 number : 1. int
          2. float
          3. double
          4. short
          5. long

 string : 1. char 
          2. string

 boolean : 1. true
           2. false

 any : 1. number
       2. string
       3. boolean

void : it is neutral data => it can not point any thing

miscellous:It is used data(value) as well as type 
   
        1. null
        2. undefined




*/


console.log(`  Data types in Typescript  `);

var a:number = 10;  // Forward declaration & defination 
console.log(`Value of a : `+a);

var b:boolean;
b = false;
console.log(`Value of b : ${b}`);

var c !:string;
console.log(`Value of c : `+c);
c = 'AK';
console.log(`Value of c : `+c);

var  d : any;
console.log(`Value of d : `+d);


// Literal data type storing

var e:number|string;
e = 10;
console.log(`Value of e : `+e);


var f:null|undefined;
f = undefined;
console.log(`Value of f : `+f);
f = null;
console.log(`Value of f : `+f);










