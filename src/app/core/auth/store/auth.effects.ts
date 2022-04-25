import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Inject, Injectable, Injector } from '@angular/core';

import { authActions } from './index';
import { catchError, map, of, Subscription, switchMap, tap } from 'rxjs';
import { TuiDialogService } from '@taiga-ui/core';
import { SignInModalComponent } from '../containers/sign-in-modal/sign-in-modal.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { SignUpModalComponent } from '../containers/sign-up-modal/sign-up-modal.component';
import { UserApiService } from '../../services/api/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { appRoutesNames } from '../../../app-routes.names';
import { ResetPasswordModalComponent } from '../containers/reset-password-modal/reset-password-modal.component';

@Injectable()
export class AuthEffects {
  private signInDialogSubscription$: Subscription;
  private signUpDialogSubscription$: Subscription;
  private resetPasswordDialogSubscription: Subscription;

  public openSignInDialog$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(authActions.openSignInDialog),
        map((payload) => {
          if (this.signUpDialogSubscription$) {
            this.signUpDialogSubscription$.unsubscribe();
          }
          this.signInDialogSubscription$ = this.dialogService
            .open<SignInModalComponent>(
              new PolymorpheusComponent(SignInModalComponent, this.injector),
              {
                data: {
                  email: payload.email || null,
                },
                dismissible: true,
                label: 'Sign in',
              }
            )
            .subscribe();
        })
      ),
    { dispatch: false }
  );

  public openSignUpDialog4 = createEffect(
    () =>
      this._actions$.pipe(
        ofType(authActions.openSignUpDialog),
        map((payload) => {
          if (this.signInDialogSubscription$) {
            this.signInDialogSubscription$.unsubscribe();
          }
          this.signUpDialogSubscription$ = this.dialogService
            .open<SignUpModalComponent>(
              new PolymorpheusComponent(SignUpModalComponent, this.injector),
              {
                data: payload,
                dismissible: true,
                label: 'Sign up',
              }
            )
            .subscribe();
        })
      ),
    { dispatch: false }
  );

  public signIn$ = createEffect(() =>
    this._actions$.pipe(
      ofType(authActions.signIn),
      switchMap((payload) => {
        return this._userApiService
          .singIn(payload.email, payload.password)
          .pipe(
            map((response) => {
              localStorage.setItem('token', response.id);
              localStorage.setItem('userId', response.userId.toString());
              this.signInDialogSubscription$.unsubscribe();

              return authActions.tryLogin({ isRedirect: false });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                authActions.signInFailed({
                  signInError: errorResponse.error.error.message,
                })
              );
            })
          );
      })
    )
  );

  public signUp$ = createEffect(() =>
    this._actions$.pipe(
      ofType(authActions.signUp),
      switchMap((payload) => {
        return this._userApiService.signUp(payload.user).pipe(
          map((response) => {
            this.signUpDialogSubscription$.unsubscribe();
            return authActions.openSignInDialog({ email: payload.user.email });
          })
        );
      })
    )
  );

  public login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(authActions.tryLogin),
      switchMap((payload) => {
        const userId = localStorage.getItem('userId');
        const user$ = userId ? this._userApiService.login(userId) : of(null);

        return user$.pipe(
          map((user) => {
            if (payload.isRedirect) {
              this._router.navigate([
                appRoutesNames.DASHBOARD.DASHBOARD,
                appRoutesNames.DASHBOARD.DESKTOP,
              ]);
            }
            this._router.navigate([
              appRoutesNames.DASHBOARD.DASHBOARD,
              appRoutesNames.DASHBOARD.DESKTOP,
            ]);

            return authActions.loginSuccess({ user });
          })
        );
      })
    )
  );

  public resetPassword$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(authActions.openResetDialog),
        map(() => {
          if (this.signInDialogSubscription$) {
            this.signInDialogSubscription$.unsubscribe();
          }
          this.resetPasswordDialogSubscription = this.dialogService
            .open<ResetPasswordModalComponent>(
              new PolymorpheusComponent(
                ResetPasswordModalComponent,
                this.injector
              ),
              {
                dismissible: true,
                label: 'Reset Password',
              }
            )
            .subscribe();
        })
      ),
    { dispatch: false }
  );

  public logout$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(authActions.logout),
        tap(() => {
          localStorage.clear();
          location.reload();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private _actions$: Actions,
    private _router: Router,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private _userApiService: UserApiService
  ) {}
}
