import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app-routes.names';
import { UserRoleGuard } from './guards/user-role.guard';

const routes: Routes = [
  {
    path: appRoutesNames.DASHBOARD.DASHBOARD,
    loadChildren: () =>
      import('./pages/conteiners/page-dashboard/page-dashboard.module').then(
        (m) => m.PageDashboardModule
      ),
    // canActivate: [UserRoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
