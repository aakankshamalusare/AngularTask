export class myclass{

    a:number = 10;

    comstructor(){

        console.log("In constructor");
    }
    getNumber(){

        console.log(this.a);
    }

}

 let obj = new myclass();
 obj.getNumber();


