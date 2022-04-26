import { createAction, props } from '@ngrx/store';
import { DocumentV1 } from '../../../../interfaces';

export const LOAD_DOCUMENTS = createAction(
  '[Desktop] load documents',
  props<{ userId: number }>()
);
export const LOAD_DOCUMENTS_SUCCESS = createAction(
  '[Desktop] load documents success',
  props<{ documents: DocumentV1[] }>()
);

export const LOAD_DOCUMENTS_Failed = createAction(
  '[Desktop] load documents failed'
);
