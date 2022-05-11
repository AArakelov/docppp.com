import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProfileComponent } from './page-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageProfileComponent,
  },
];

@NgModule({
  declarations: [PageProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageProfileModule {}
