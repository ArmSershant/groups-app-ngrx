import { createReducer, on } from '@ngrx/store';
import { Student } from '../students/models/student.model';
import { addstudent, deletestudent } from './student.actions';
export const initialState: Student[] = [];
export const Studentreducer = createReducer(
  initialState,
  on(addstudent, (state, action) => [...state, action.student]),
  on(deletestudent, (state, action) =>
    state.filter((st) => st.id !== action.student.id)
  )
);
