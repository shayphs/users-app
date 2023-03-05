import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { users } from '../mock/users.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    // Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*()_+]+)$/),
  ]);
  hidePassword = true;
  
  constructor() { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    const isValidUser = users.some((element:any) => {
      console.log(element);
      console.log(this.email.value);
      console.log(this.password);
      return element.email === this.email.value && element.password === this.password.value;
    });

    console.log(isValidUser);
  }
  
  ngOnInit(): void {
  }

}
