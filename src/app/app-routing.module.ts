import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app-routes.names';

const routes: Routes = [
  {
    path: appRoutesNames.DESKTOP,
    loadChildren: () =>
      import('../app/pages/pages/page-desktop/desktop-page.module').then(
        (m) => m.DesktopPageModule
      ),
  },
  {
    path: appRoutesNames.MEDICAL_CARD,
    loadChildren: () =>
      import(
        '../app/pages/pages/page-medical-card/page-medical-card.module'
      ).then((m) => m.PageMedicalCardModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
