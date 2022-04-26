import { authFeatureKey, AuthState } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAccountState = createFeatureSelector<AuthState>(authFeatureKey);

export const getUser = createSelector(getAccountState, (state) => state.user);
export const getUserId = createSelector(
  getAccountState,
  (state) => state.user?.id
);
