import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { role } from '../../mock/users.mock';
import { users } from '../../mock/users.mock';


export interface DialogData {
  id: number;
  email: string;
  role: string;
  name: string;
  password: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;
  roleList = [role.Admin, role.User];

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      role: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
    this.editSetValue();
  }

  editSetValue() {
    this.form.setValue({
      name: this.data.name,
      role: this.data.role,
      email: this.data.email,
      password: this.data.password,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit() {
    const user = users.find((usr:any) => usr.id == this.data.id);
    const i = users.indexOf(user);
    users[i] = this.form.value;
  }
}
