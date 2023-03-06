import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { users } from '../../mock/users.mock';
import { UsersModel } from '../users.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getUser(params['id']);
    });
  }

  getUser(id: string) {
    this.user = users.find((usr: UsersModel) => usr.id === parseInt(id, 10));
  }
}
