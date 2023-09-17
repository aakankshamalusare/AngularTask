import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  model = {
    username: '',
    password: ''
  };

  // Function to check if a value is numeric
  isNumeric(value: any): boolean {
    return !isNaN(value);
  }

  onSubmit(loginForm: any) {
    // Handle form submission logic here
  }

}
