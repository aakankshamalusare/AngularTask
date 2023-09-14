import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
   name:string = "Aakanksha";
   age:number = 22;

   //property binding
   imgUrl:string='../../assets/download.jpg'
   color:string = "Violet"
   
   //style binding
   jsonObj = {

      color:'blueviolet',
      fontSize:"32px",
      'font-family':'Courier New'
   
    };
  
   

   constructor() { }

   

  ngOnInit(): void {
  }

}
