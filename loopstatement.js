/*
    Loop Statement:

    1.while
    2.do-while
    3.for
    4.foreach

*/
var count = 5;
console.log("---------------------");
while (count != 0) {
    console.log("Count:" + count);
    count--;
}
count = 5;
console.log("---------------------");
do {
    console.log("Count:" + count);
    count--;
} while (count != 0);
console.log("---------------------");
for (var i = 0; i < 4; i++) {
    console.log("Value of i is " + i);
}
console.log("---------------------");
console.log("Access i is after loop " + i);
/*
  var scope => its global scope
  
  let => scope = within nearest a block ({})

*/
console.log("---------------------");
for (var i_1 = 0; i_1 < 4; i_1++) {
    console.log("Value of i is " + i_1);
}
console.log("---------------------");
//  const scope => its global as well as local
var pi = 3.14;
console.log("Value of pi is " + pi);
console.log("---------------------");
