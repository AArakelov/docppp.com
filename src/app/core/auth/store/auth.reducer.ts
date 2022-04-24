import { User } from '../../../interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { authActions } from './index';

export const authFeatureKey = 'auth';

export interface AuthState {
  token: string;
  user: User;
  signUpErrors: { [key: string]: string[] };
  isSignUpLoading: boolean;
  signInError: string;
  isSignInLoading: boolean;
}
export const initialState: AuthState = {
  token: null,
  user: null,
  signUpErrors: null,
  isSignUpLoading: false,
  signInError: null,
  isSignInLoading: false,
};

const authReducer = createReducer(
  initialState,
  on(authActions.signUp, (state) => ({
    ...state,
    signUpErrors: null,
    isSignUpLoading: true,
  })),
  on(authActions.signUpFailed, (state, { signUpErrors }) => ({
    ...state,
    signUpErrors,
    isSignUpLoading: false,
  })),
  on(authActions.openSignInDialog, authActions.openSignUpDialog, (state) => ({
    ...state,
    isSignUpLoading: false,
    signUpErrors: null,
    isSignInLoading: false,
    signInError: null,
  })),
  on(authActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    token: localStorage.getItem('token'),
  })),
  on(authActions.signIn, (state) => ({
    ...state,
    signInError: null,
    isSignInLoading: true,
  }))
);
export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
