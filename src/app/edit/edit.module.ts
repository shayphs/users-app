import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditRoutingModule,
    MaterialModule
  ]
})
export class EditModule { }
