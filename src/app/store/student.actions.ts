import { createAction, props } from '@ngrx/store';
import { Student } from '../students/models/student.model';
export const addstudent = createAction(
  '[AddStudent Component] create student',
  props<{ student: Student }>()
);
export const deletestudent = createAction(
  '[Student Component] delete student',
  props<{ student: Student }>()
);
