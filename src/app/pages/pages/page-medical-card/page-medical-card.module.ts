import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMedicalCardComponent } from './page-medical-card.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fromMedicalCard, MedicalCardEffects } from './store';
import { appRoutesNames } from '../../../app-routes.names';

const routes: Routes = [
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
  ],
  exports: [PageMedicalCardComponent, RouterModule],
})
export class PageMedicalCardModule {}
