import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../models/group.model';
import { NgForm } from '@angular/forms';
import { addgroup, count } from 'src/app/store/group.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css'],
})
export class AddgroupComponent {
  constructor(
    private store: Store<{ groups: Group[] }>,
    private router: Router
  ) {}
  onSubmit(form: NgForm) {
    let group = new Group(
      Math.floor(Math.random() * 1001).toString(),
      form.value.title,
      form.value.countOfStudents,
      0
    );
    if (
      form.value.title.length < 2 ||
      form.value.countOfStudents.length === ''
    ) {
      throw new Error('Name and Count are required');
    } else {
      this.store.dispatch(addgroup({ group }));
      form.resetForm();
      this.router.navigate(['/app-groups']);
    }
  }
}
