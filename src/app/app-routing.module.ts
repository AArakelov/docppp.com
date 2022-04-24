import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app-routes.names';

const routes: Routes = [
  {
    path: appRoutesNames.DESKTOP,
    loadChildren: () =>
      import('./pages/pages/page-desktop/page-desktop.module').then(
        (m) => m.PageDesktopModule
      ),
  },
  {
    path: appRoutesNames.MEDICAL_CARD,
    loadChildren: () =>
      import('./pages/pages/page-medical-card/page-medical-card.module').then(
        (m) => m.PageMedicalCardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
