import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from '../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { addstudent } from 'src/app/store/student.actions';
import { Group } from 'src/app/groups/models/group.model';
import { count } from 'src/app/store/group.actions';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(
    private store: Store<{ students: Student[]; groups: Group[] }>,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onSubmit(form: NgForm) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      let student = new Student(
        Math.floor(Math.random() * 1001).toString(),
        id.toString(),
        form.value.name,
        form.value.surname
      );
      if (form.value.name.length < 2 || form.value.surname.length < 3) {
        throw new Error('Name and Surname are required');
      } else {
        form.resetForm();
        this.store.dispatch(addstudent({ student }));
        this.store.dispatch(count({ id: id, count:1 }));

        this.router.navigate(['/app-students', id]);
      }
    }
  }
}
