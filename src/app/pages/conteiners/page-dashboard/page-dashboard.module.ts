import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './page-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from '../../../app-routes.names';
import { BlockPageHeaderModule } from '../../block/block-page-header/block-page-header.module';
import { UserRoleGuard } from '../../../guards/user-role.guard';

const routes: Routes = [
  {
    path: '',
    component: PageDashboardComponent,
    // canActivateChild: [UserRoleGuard],
    children: [
      {
        path: appRoutesNames.DASHBOARD.DESKTOP,
        loadChildren: () =>
          import('../../pages/page-desktop/desktop-page.module').then(
            (m) => m.DesktopPageModule
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
})
export class PageDashboardModule {}
