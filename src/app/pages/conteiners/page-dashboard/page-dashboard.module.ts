import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './page-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from '../../../app-routes.names';
import { BlockPageHeaderModule } from '../../block/block-page-header/block-page-header.module';
import { DocumentApiService } from '../../../core/services/api/document-api.service';

const routes: Routes = [
  {
    path: '',
    component: PageDashboardComponent,
    // canActivateChild: [UserRoleGuard],
    children: [
      {
        path: appRoutesNames.DASHBOARD.DESKTOP,
        loadChildren: () =>
          import('../../pages/page-desktop/page-desktop.module').then(
            (m) => m.PageDesktopModule
          ),
      },
      {
        path: appRoutesNames.DASHBOARD.MEDICAL_CARD,
        loadChildren: () =>
          import('../../pages/page-medical-card/page-medical-card.module').then(
            (m) => m.PageMedicalCardModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [PageDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BlockPageHeaderModule],
  exports: [PageDashboardComponent, RouterModule],
  providers: [DocumentApiService],
})
export class PageDashboardModule {}
