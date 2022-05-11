import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMedicalCardComponent } from './page-medical-card.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fromMedicalCard, MedicalCardEffects } from './store';
import { appRoutesNames } from '../../../app-routes.names';
import { SideNavigationService } from './services/side-navigation/side-navigation.service';
import { TuiForModule } from '@taiga-ui/cdk';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile',
  },
  {
    path: '',
    component: PageMedicalCardComponent,
    children: [
      {
        path: appRoutesNames.DASHBOARD.DOCUMENT.DOCUMENTS,
        loadChildren: () =>
          import('../page-documents/page-documents.module').then(
            (m) => m.PageDocumentsModule
          ),
      },
      {
        path: appRoutesNames.DASHBOARD.Profile,
        loadChildren: () =>
          import('../page-profile/page-profile.module').then(
            (m) => m.PageProfileModule
          ),
      },
      {
        path: appRoutesNames.DASHBOARD.DOCUMENT.MONITORING,
        loadChildren: () =>
          import('../page-monitoring/page-monitoring.module').then(
            (m) => m.PageMonitoringModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [PageMedicalCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromMedicalCard.medicalCardFeatureKey,
      fromMedicalCard.reducer
    ),
    EffectsModule.forFeature([MedicalCardEffects]),
    TuiForModule,
  ],
  exports: [PageMedicalCardComponent, RouterModule],
  providers: [SideNavigationService],
})
export class PageMedicalCardModule {}
