import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModalComponent } from './sign-in-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [SignInModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiInputPasswordModule,

    TuiButtonModule,
  ],
})
export class SignInModalModule {}
