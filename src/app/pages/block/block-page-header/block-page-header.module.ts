import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockPageHeaderComponent } from './block-page-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlockPageHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [BlockPageHeaderComponent],
})
export class BlockPageHeaderModule {}
