import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDesktopOperator from './desktop.reducer';
const getState = createFeatureSelector<fromDesktopOperator.DesktopeState>(
  fromDesktopOperator.desktopFeatureKey
);

export const documets = createSelector(getState, (state) => state.documents);
