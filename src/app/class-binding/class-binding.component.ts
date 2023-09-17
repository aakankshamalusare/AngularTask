import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='success';
  rating:number=21;
  isError:boolean=true;
  isSpecial:boolean=true;
  name="Aakanksha";

  isClicked:boolean=false;

  jsonObj={

    'success':!this.isError,
    'danger' : this.isError,
    'special' :this.isSpecial
  
   
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(){

    this.isClicked = !this.isClicked;
  }


}
