import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDocumentsComponent } from './page-documents.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageDocumentsComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import(
        '../../conteiners/page-document-detail/page-document-detail.module'
      ).then((m) => m.PageDocumentDetailModule),
  },
];

@NgModule({
  declarations: [PageDocumentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDocumentsModule {}
