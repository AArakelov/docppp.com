import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpModalComponent } from './sign-up-modal.component';
import {
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiSelectModule,
  TuiStepperModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
  declarations: [SignUpModalComponent],
  imports: [
    CommonModule,
    TuiStepperModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiCheckboxLabeledModule,
    TuiInputDateModule,
  ],
  exports: [SignUpModalComponent],
})
export class SignUpModalModule {}
