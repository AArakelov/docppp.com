import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { BlockPageHeaderModule } from './pages/block/block-page-header/block-page-header.module';
import { TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { LoopbackModule } from './core/services/loopback.module';
import { SignInModalModule } from './core/auth/containers/sign-in-modal/sign-in-modal.module';
import { SignUpModalModule } from './core/auth/containers/sign-up-modal/sign-up-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordModalModule } from './core/auth/containers/reset-password-modal/reset-password-modal.module';
import { UserRoleGuard } from './guards/user-role.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    FormsModule,
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    SignInModalModule,
    SignUpModalModule,
    ResetPasswordModalModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BlockPageHeaderModule,

    LoopbackModule,
  ],
  providers: [UserRoleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
