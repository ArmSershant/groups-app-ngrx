import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'app-students/:id',
    component: StudentsComponent,
  },
  {
    path: 'app-addstudent/:id',
    component: AddStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
