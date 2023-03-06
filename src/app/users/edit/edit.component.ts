import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { role, users } from '../../mock/users.mock';
import { UsersModel } from '../users.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;
  roleList = [role.Admin, role.User];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsersModel
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      role: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
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
    const user = users.find((usr: UsersModel) => usr.id === this.data.id);
    const i = users.indexOf(user);
    users[i] = this.form.value;
  }
}
