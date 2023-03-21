import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Studentreducer } from '../store/student.reducers';

@NgModule({
  declarations: [StudentsComponent, AddStudentComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    StoreModule.forFeature('students', Studentreducer),
  ],
})
export class StudentsModule {}
