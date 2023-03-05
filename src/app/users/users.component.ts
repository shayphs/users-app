import { Component, OnInit } from '@angular/core';
import { users } from '../mock/users.mock';

export interface UsersElement {
  id: number;
  name: string;
  email: string;
  password: string;
  role: number; // enum
}

const ELEMENT_DATA: UsersElement[] = users;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
