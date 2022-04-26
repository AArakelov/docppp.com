import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Store } from '@ngrx/store';
import { authSelectors } from '../../../core/auth/store';
import { desktopSelectors, pageDesktopActions } from './store';
import { first, take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'doc-page-desktop',
  templateUrl: './page-desktop.component.html',
  styleUrls: ['./page-desktop.component.scss'],
})
export class PageDesktopComponent implements OnInit {
  public isMobile: boolean;
  public userId$ = this._store.select(authSelectors.getUserId);
  public user$ = this._store.select(authSelectors.getUser);
  public documents$ = this._store.select(desktopSelectors.documets);

  public countLoad = 3;

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private _store: Store
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.loadDocuments();
  }

  public trackByFn() {}

  private loadDocuments() {
    this.userId$.pipe(untilDestroyed(this)).subscribe((userId) => {
      this._store.dispatch(pageDesktopActions.LOAD_DOCUMENTS({ userId }));
    });
  }
}
