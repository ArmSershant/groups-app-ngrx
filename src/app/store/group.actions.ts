import { createAction, props } from '@ngrx/store';
import { Group } from '../groups/models/group.model';
export const addgroup = createAction(
  '[AddGroup Component] create group',
  props<{ group: Group }>()
);
export const count = createAction(
  '[AddGroup Component] save count of students',
  props<{ id: string, count:number }>()
);
