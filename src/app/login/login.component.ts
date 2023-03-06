import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from '../mock/users.mock';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

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
    this.usersService.getUsersLogin(this.form.value).subscribe((res) => {
      const validUser = res[0];

      if (!!validUser) {
        localStorage.setItem('credentials', JSON.stringify(validUser.email));
        localStorage.setItem('role', JSON.stringify(validUser.role));
        this.router.navigate(['/users']);
      }
    });
  }
}
