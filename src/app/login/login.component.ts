import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { users } from '../mock/users.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const isValidUser = users.some((element:any) => {
      return element.email === this.form.value.email && element.password === this.form.value.password;
    });

    if (isValidUser) {
      // do login
      localStorage.setItem('credentials', JSON.stringify(this.form.value.email));
    }
  }
}

/*
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
    // Validators.minLength(4),
    // Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*()_+]+)$/),
  ]);
  hidePassword = true;
  
  constructor() { }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
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
*/