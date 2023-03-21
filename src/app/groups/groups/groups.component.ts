import { Component } from '@angular/core';
import { Group } from '../models/group.model';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/students/models/student.model';
import { Observable } from 'rxjs';
import { count } from 'src/app/store/group.actions';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent {
  constructor(
    private store: Store<{ groups: Group[] }>,
    private studentStore: Store<{ students: Student[] }>
  ) {}
  groups$ = this.store.select((state) => state.groups);
  students$!: Observable<any>;
  ngOnInit() {
    this.students$ = this.studentStore.select((state) => state.students);
  }
}
