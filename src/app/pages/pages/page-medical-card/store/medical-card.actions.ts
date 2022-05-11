import { createAction, props } from '@ngrx/store';

export const yMedicalCards = createAction(
  '[MedicalCard] Y MedicalCards'
);

export const yMedicalCardsSuccess = createAction(
  '[MedicalCard] Y MedicalCards Success',
  props<{ data: any }>()
);

export const yMedicalCardsFailure = createAction(
  '[MedicalCard] Y MedicalCards Failure',
  props<{ error: any }>()
);
