import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDesktopComponent } from './page-desktop.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageDesktopComponent,
  },
];
@NgModule({
  declarations: [PageDesktopComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PageDesktopComponent, RouterModule],
})
export class PageDesktopModule {}
