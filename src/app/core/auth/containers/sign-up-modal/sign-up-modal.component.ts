import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../../interfaces';
import { Store } from '@ngrx/store';
import { authActions } from '../../store';

@Component({
  selector: 'doc-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpModalComponent implements OnInit {
  readonly steps = ['Step 1', 'Step 2'];
  readonly sexItems = ['Male', 'Female'];
  public activeStep = 0;
  public form: FormGroup;

  constructor(private _fb: FormBuilder, private _store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  public get buttonText() {
    return this.activeStep > 0 ? 'Sign up' : 'Next step';
  }

  public onStep(step: number) {
    this.activeStep = step;
  }
  public nextStep() {
    if (this.activeStep < 1) {
      this.activeStep++;
      return;
    }
    this.onSubmit();
  }

  public get isDisabledStepForm(): boolean {
    if (this.activeStep < 1) {
      return this.form.get('step1').invalid;
    }
    return this.form.get('step2').invalid;
  }

  public onSubmit() {
    const formStep1 = this.form.get('step1');
    const formStep2 = this.form.get('step2');
    const user: User = {
      birthday: formStep2.get('birthday').value,
      email: formStep1.get('email').value,
      firstName: formStep2.get('firstName').value,
      lastName: formStep2.get('lastName').value,
      password: formStep1.get('password').value,
      phone: formStep2.get('phone').value,
      sex: formStep2.get('sex').value,
    };

    this._store.dispatch(authActions.signUp({ user }));
  }

  private initForm() {
    this.form = this._fb.group({
      step1: this._fb.group({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required),
      }),
      step2: this._fb.group({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        patronymic: new FormControl(null),
        phone: new FormControl(null),
        sex: new FormControl(null),
        birthday: new FormControl(null),
        acceptAgreement: new FormControl(null, Validators.required),
      }),
    });
  }
}
