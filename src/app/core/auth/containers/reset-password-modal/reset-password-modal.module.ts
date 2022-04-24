import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordModalComponent } from './reset-password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ResetPasswordModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
  ],
})
export class ResetPasswordModalModule {}
