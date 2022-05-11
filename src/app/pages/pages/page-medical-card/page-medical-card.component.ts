import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { appRoutesNames } from '../../../app-routes.names';
import { SideNavigationService } from './services/side-navigation/side-navigation.service';
import { Observable } from 'rxjs';
import { IMenuItem } from '../../../interfaces';

@Component({
  selector: 'doc-page-medical-card',
  templateUrl: './page-medical-card.component.html',
  styleUrls: ['./page-medical-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageMedicalCardComponent implements OnInit {
  readonly appRoutesName = appRoutesNames;
  readonly menuItems$: Observable<IMenuItem[]> =
    this.sideNavigationService.menuItem$;
  constructor(private sideNavigationService: SideNavigationService) {}

  ngOnInit(): void {}
}
