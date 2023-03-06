import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { EditModule } from './edit/edit.module';
import { UsersRoutingModule } from './users-routing.module';
import { DeleteUserComponent, UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, DeleteUserComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, EditModule],
})
export class UsersModule {}
