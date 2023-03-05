import { Component, OnInit } from '@angular/core';

export interface UsersElement {
  id: number;
  name: string;
  role: number; // enum
}

const ELEMENT_DATA: UsersElement[] = [
  {id: 1, name: 'Hydrogen', role: 1.0079},
  {id: 2, name: 'Helium', role: 4.0026},
  {id: 3, name: 'Lithium', role: 6.941},
  {id: 4, name: 'Beryllium', role: 9.0122},
  {id: 5, name: 'Boron', role: 10.811},
  {id: 6, name: 'Carbon', role: 12.0107},
  {id: 7, name: 'Nitrogen', role: 14.0067},
  {id: 8, name: 'Oxygen', role: 15.9994},
  {id: 9, name: 'Fluorine', role: 18.9984},
  {id: 10, name: 'Neon', role: 20.1797},
];

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
