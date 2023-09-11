import { Lion } from "./Lion";

export class Cat  extends Lion{

    constructor(name:string){

        super(name);
    }

    override
    makeSound(): void {
        
        console.log(`Cat ${this.name} makes sound`)
    }
}