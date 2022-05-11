import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDocumentDetailComponent } from './page-document-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageDocumentDetailComponent,
  },
];

@NgModule({
  declarations: [PageDocumentDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, PageDocumentDetailComponent],
})
export class PageDocumentDetailModule {}
