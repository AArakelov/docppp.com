import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Store } from '@ngrx/store';
import { authSelectors } from '../../../core/auth/store';
import { desktopSelectors, pageDesktopActions } from './store';
import { first, take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TuiDay, TuiDayRange, TuiMonth } from '@taiga-ui/cdk';
import { TuiBaseColor, TuiColor, TuiMarkerHandler } from '@taiga-ui/core';

const TWO_DOTS: [TuiColor, TuiColor] = [
  TuiBaseColor.Primary,
  TuiBaseColor.Secondary,
];
const ONE_DOT: [TuiBaseColor] = [TuiBaseColor.Success];

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

  value: TuiDayRange | null = null;
  firstMonth = TuiMonth.currentLocal();
  hoveredItem: TuiDay | null = null;

  readonly markerHandler: TuiMarkerHandler = (day: TuiDay) => {
    return [TuiBaseColor.Success];
  };
  // Attention: do not create new arrays in handler, use constants intead

  public countLoad = 3;

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private _store: Store
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.loadDocuments();
  }

  onDayClick(day: TuiDay) {
    if (this.value === null || !this.value.isSingleDay) {
      this.value = new TuiDayRange(day, day);
    }

    this.value = TuiDayRange.sort(this.value.from, day);
  }
  onMonthChangeFirst(month: TuiMonth) {
    this.firstMonth = month;
  }

  private loadDocuments() {
    this.userId$.pipe(untilDestroyed(this)).subscribe((userId) => {
      this._store.dispatch(pageDesktopActions.LOAD_DOCUMENTS({ userId }));
    });
  }
}
