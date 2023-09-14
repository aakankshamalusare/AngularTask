import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSend(input:any){

    console.log(input.value)

  }

  onSend1(input:any){

    console.log(input);
    console.log(input.target.value);
    

  }

  result!:string;

  isPrimeNumber(num1:any) {

     let num =+ num1;
    
     for (let i = 2; i * i <= num; i++) {
     
      if (num % i == 0) {
        this.result="Not Prime Number";
        return;
      }
    }

    this.result="Prime Number";
   
  }



}
