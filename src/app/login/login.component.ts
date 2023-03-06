import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from '../mock/users.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const validUser = users.find((element: any) => {
      console.log(element);
      console.log(this.form.value);
      return (
        element.email === this.form.value.email &&
        element.password === this.form.value.password
        );
      });
      
    if (!!validUser) {
       localStorage.setItem(
        'credentials',
        JSON.stringify(validUser.email)
      );
      localStorage.setItem('role', JSON.stringify(validUser.role));
      this.router.navigate(['/users']);
    }
  }
}
