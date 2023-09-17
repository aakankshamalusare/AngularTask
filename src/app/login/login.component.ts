import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = {
    username: '',
    password: ''
  };

  showValidationMessage = false;
  onSubmit(loginForm: NgForm) {

     // Check if either the username or password is empty
     if (!this.model.username || !this.model.password) {
      this.showValidationMessage = true;
      return;
    }

   
    // Perform validation logic here
    if (this.model.username === 'aakanksha' && this.model.password === '1234') {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }

    // Reset the form after submission
    loginForm.reset();
    this.showValidationMessage = false;

   }
}
