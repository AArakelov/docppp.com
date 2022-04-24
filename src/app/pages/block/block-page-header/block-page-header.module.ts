import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockPageHeaderComponent } from './block-page-header.component';
import { RouterModule } from '@angular/router';
import {
  TuiAccordionModule,
  TuiAvatarModule,
  TuiMarkerIconModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';

@NgModule({
  declarations: [BlockPageHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TuiMarkerIconModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiAvatarModule,
    TuiAccordionModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
  ],
  exports: [BlockPageHeaderComponent],
})
export class BlockPageHeaderModule { }
