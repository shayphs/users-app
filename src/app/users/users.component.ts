import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { EditComponent } from '../edit/edit.component';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {...user},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
