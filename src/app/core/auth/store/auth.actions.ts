import { createAction, props } from '@ngrx/store';
import { User } from '../../../interfaces';

export const getToken = createAction('[Auth] Get token');
export const setToken = createAction(
  '[Auth] Set token',
  props<{ token: string }>()
);

export const openSignInDialog = createAction(
  '[Auth] Open SignIn dialog',
  props<{
    email?: string;
  }>()
);
/*Sign in*/
export const signIn = createAction(
  '[Auth] SignIn',
  props<{ email: string; password: string }>()
);
export const signInFailed = createAction(
  '[Auth] SignIn failed',
  props<{ signInError: string }>()
);
/*Try login*/
export const tryLogin = createAction(
  '[Auth] Try login',
  props<{ isRedirect?: boolean }>()
);
export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ user: User }>()
);
export const loginFailed = createAction('[Auth] Login failed');
export const logout = createAction('[Auth] Logout');

/*Sign up*/
export const openSignUpDialog = createAction('[Auth] Open SignUp dialog');
export const signUp = createAction('[Auth] SignUp', props<{ user: User }>());
export const signUpFailed = createAction(
  '[Auth] SignUp failed',
  props<{
    signUpErrors: { [key: string]: string[] };
  }>()
);
export const openForgotPasswordDialog = createAction(
  '[Auth] Open ForgotPassword dialog'
);
export const sendReset = createAction(
  '[Auth] Send Reset',
  props<{ email: string }>()
);
export const sendResetSuccess = createAction('[Auth] Send Reset success');
export const sendResetFailed = createAction('[Auth] Send Reset failed');

export const changePassword = createAction(
  '[Auth] Send Change Password',
  props<{ oldPassword: string; newPassword: string }>()
);
export const changePasswordSuccess = createAction(
  '[Auth] Change password success'
);
export const changePasswordFailed = createAction(
  '[Auth] Change password failed'
);

export const openResetDialog = createAction('[Auth] Open Reset dialog');
export const resetPassword = createAction(
  '[Auth] Reset password',
  props<{ newPassword: string; token?: string; userId: string }>()
);
export const resetPasswordSuccess = createAction(
  '[Auth] Reset password success'
);
export const resetPasswordFailed = createAction('[Auth] Reset password failed');
