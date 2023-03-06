import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { EditComponent } from './edit/edit.component';
import { users } from '../mock/users.mock';
import { role } from '../mock/users.mock';

export interface UsersElement {
  id: number;
  name: string;
  email: string;
  password: string;
  role: role; // enum
}

const ELEMENT_DATA: UsersElement[] = users;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: { ...user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.dataSource = result;
    });
  }

  openDeleteDialog(user: any): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { ...user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.dataSource = result;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

@Component({
  template: `
    <h1 mat-dialog-title>Delete User</h1>
    <div mat-dialog-content>Are you sure that you want delete this user?</div>
    <div mat-dialog-actions>
      <button
        mat-raised-button
        mat-dialog-close
        color="warn"
        (click)="removeUser()"
      >
        Yes!
      </button>
      <button mat-raised-button mat-dialog-close>No</button>
    </div>
  `,
})
export class DeleteUserComponent {
  removeUser() {
    alert('User deleted');
  }
}
