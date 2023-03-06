import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { EditModule } from '../edit/edit.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    EditModule
  ]
})
export class UsersModule { }
