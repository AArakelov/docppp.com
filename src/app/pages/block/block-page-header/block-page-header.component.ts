import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { appRoutesNames } from '../../../app-routes.names';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { authActions, authSelectors } from '../../../core/auth/store';
import { Person } from '../../../interfaces';
import { filter } from 'rxjs';
import { mainConfig } from '../../../../config';

@Component({
  selector: 'doc-block-page-header',
  templateUrl: './block-page-header.component.html',
  styleUrls: ['./block-page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockPageHeaderComponent implements OnInit {
  appRouteNames = appRoutesNames;
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;
  open = false;
  isOpenSidebar = false;
  userAvatar: string = mainConfig.noPhotoUrl;
  userName: string = ' ';
  readonly items = ['Action 1', 'Action 2', 'Action 3', 'Logout'];
  readonly webApis = [
    'Common',
    'Audio',
    'Canvas',
    'Geolocation',
    'MIDI',
    'Workers',
  ];
  readonly tinkoff = [
    'Taiga-UI',
    'ng-event-plugins',
    'ng-polymorpheus',
    'ng-dompurify',
  ];

  public user$ = this._store.select(authSelectors.getUser);

  constructor(private _store: Store, private _cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.user$.pipe(filter((user) => !!user)).subscribe((user) => {
      this.getAvatar(user as Person);
    });
  }

  public onClick(): void {
    this.open = false;
    if (this.component && this.component.nativeFocusableElement) {
      this.component.nativeFocusableElement.focus();
    }
  }

  public toggle(open: boolean): void {
    this.isOpenSidebar = open;
  }

  private getAvatar(user: Person): void {
    this.userAvatar = user.avatar;
    this.userName = `${user.lastName}${user.firstName}`;
    this._cdRef.markForCheck();
  }

  public logout() {
    this._store.dispatch(authActions.logout());
  }
}
