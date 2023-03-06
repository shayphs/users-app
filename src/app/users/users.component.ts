import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { EditComponent } from './edit/edit.component';
import { UsersModel } from './users.model';
import { UsersService } from './users.service';

const ELEMENT_DATA: UsersModel[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['createdAt', 'name', 'role', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  isLoading = false;
  disableEdit = true;
  userEmail = localStorage.getItem('credentials')?.replace(/\"/g, '');

  constructor(
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private usersService: UsersService
  ) {}

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getUsers();
    this.disableEdit = localStorage.getItem('role') !== '"Admin"';
  }

  getUsers(){
    this.isLoading = true;
    this.usersService.getUsers().subscribe(
      (res) => {
        this.dataSource = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      });
  }

  openDialog(user: UsersModel | null): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: { ...user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
    });
  }

  openDeleteDialog(user: UsersModel): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { ...user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
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
    <div mat-dialog-content>Are you sure that you want delete <b>{{data.name}}</b>?</div>
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

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsersModel,
    private usersService: UsersService
  ) {}

  removeUser() {
    this.usersService.deleteUser(this.data.id).subscribe({});
  }
}
