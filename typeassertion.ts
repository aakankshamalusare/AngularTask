/*
   Type Assertion:

   - Required for compiler purpose
   - Your variable must be any/Object/Unknown
   - Two ways :
        1. angle bracket => in .ts file
        2. as syntax => in view file ie. .html
*/

// angle bracket

var a:boolean = true;

var temp1= (<number><unknown>a);

console.log(`The value of temp1 ${temp1}`);

temp1 = 11;

console.log(`The value of temp1 ${temp1}`);

// as syntax

var temp2 :any= (a as unknown as string)

console.log(`The value of temp2 ${temp2}`);

temp2= "AK";

console.log(`The value of temp2 ${temp2}`);

temp2 = 12121;

console.log(`The value of temp2 ${temp2}`);


