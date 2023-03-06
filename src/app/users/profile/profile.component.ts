import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { users } from '../../mock/users.mock';
import { UsersModel } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  isLoading = false;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getUser(params['id']);
    });
  }

  getUser(id: number) {
    this.isLoading = true;
    this.usersService.getUser(id).subscribe(
      (res) => {
        this.user = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      });
  }
}
