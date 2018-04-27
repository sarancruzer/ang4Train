import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddProjectComponent, EditProjectComponent, ManageProjectComponent]
})
export class ProjectModule { }
