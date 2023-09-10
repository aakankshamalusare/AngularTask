
let stringArray:string[] = [];

stringArray.push("AK","BK","CK");

stringArray.forEach((val,index,array) =>{

    console.log(`Value:${val} Index: ${index}`);
});

stringArray.pop();

for (let index = 0; index < stringArray.length; index++) {

    console.log(stringArray[index]);
    
}

stringArray.splice(1,0,"DK");
console.log(stringArray);


stringArray.splice(10,1,"Aakanksha");
console.log(stringArray);

function display(a:number,...item:string[]){

    console.log(item);

}

display(10,"N","M");




