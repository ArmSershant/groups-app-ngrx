import { Student } from '../students/models/student.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getState = createFeatureSelector('students');
export const getStudentsByGroupId = createSelector(
  getState,
  (state: any, props: { id: string }) =>
    state.filter((el: Student) => el.groupId === props.id)
);
