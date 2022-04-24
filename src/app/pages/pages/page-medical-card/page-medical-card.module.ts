import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMedicalCardComponent } from './page-medical-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageMedicalCardComponent,
  },
];
@NgModule({
  declarations: [PageMedicalCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PageMedicalCardComponent, RouterModule],
})
export class PageMedicalCardModule {}
