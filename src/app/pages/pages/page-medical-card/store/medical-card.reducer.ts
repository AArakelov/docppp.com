import { Action, createReducer, on } from '@ngrx/store';
import { Allergy, Medicament } from 'src/app/interfaces';

export const medicalCardFeatureKey = 'medicalCard';

export interface MedicalCardState {
  allergies: Allergy[];
  medicaments: Medicament[];
  isLoading: boolean;
}

export const initialState: MedicalCardState = {
  isLoading: false,
  allergies: [],
  medicaments: [],
};

export const medicalCardReducer = createReducer(initialState);
export function reducer(
  state: MedicalCardState,
  action: Action
): MedicalCardState {
  return medicalCardReducer(state, action);
}
