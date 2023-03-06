import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'users-app';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('credentials');
    localStorage.removeItem('role');
    alert('logged out');
    this.router.navigate(['/login']);
  }
}
