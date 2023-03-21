import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deletestudent } from 'src/app/store/student.actions';
import { Student } from '../models/student.model';
import { ActivatedRoute } from '@angular/router';
import { getStudentsByGroupId } from 'src/app/store/student.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  constructor(
    private store: Store<{ students: Student[] }>,
    private route: ActivatedRoute
  ) {}
  students$!: Observable<any>;
  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.students$ = this.store.select(getStudentsByGroupId, {
        id: id.toString(),
      });
    });
  }
  onDelete(student: Student) {
    this.store.dispatch(deletestudent({ student }));
  }
}
