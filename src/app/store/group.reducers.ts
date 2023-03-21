import { createReducer, on } from '@ngrx/store';
import { Group } from '../groups/models/group.model';
import { addgroup, count } from './group.actions';
export const initialState: Group[] = [];
export const Groupreducer = createReducer(
  initialState,
  on(addgroup, (state, action) => [...state, action.group]),
  on(count, (state, { id, count }) => {
    return state.map((el) =>
      el.id === id ? { ...el, currentCount: el.currentCount + count } : el
    );
  })
);
