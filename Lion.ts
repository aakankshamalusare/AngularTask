
import{Animal} from "./Animal";

export class Lion extends Animal{

    constructor(name:string){

        super();
        this.name = name;
    }


    makeSound(): void {
        
        console.log(`Lion ${this.name} makes sound`);
    }
}