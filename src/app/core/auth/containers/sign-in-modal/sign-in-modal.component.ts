import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions, authSelectors } from '../../store';
import { filter } from 'rxjs';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'doc-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInModalComponent implements OnInit {
  form: FormGroup;

  public user$ = this._store.select(authSelectors.getUser);

  constructor(
    private fb: FormBuilder,
    private _store: Store,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<{ email: string }, any>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    console.log(this.context.data);
    this.form = this.fb.group({
      email: new FormControl(
        this.context.data.email || 'a.g.arakelov2@gmail.com',
        Validators.required
      ),
      password: new FormControl('12345678', Validators.required),
    });
    this.user$
      .pipe(filter((user) => !!user))
      .subscribe((user) => this.form.get('email').setValue(user.email));
  }

  public onSubmit(): void {
    this._store.dispatch(authActions.signIn(this.form.value));
  }

  public signUp(): void {
    this._store.dispatch(authActions.openSignUpDialog());
  }

  public openReestDialog() {
    this._store.dispatch(authActions.openResetDialog());
  }
}
