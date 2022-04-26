import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDesktopComponent } from './page-desktop.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../../core/components/card/card.module';
import {
  TuiAccordionModule,
  TuiAvatarModule,
  TuiBadgeModule,
  TuiIslandModule,
  TuiMarkerIconModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiCalendarModule,
  TuiColorModule,
  TuiLabelModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DesktopEffects, fromDesktop } from './store';
import { TuiElasticStickyModule } from '@taiga-ui/addon-mobile';

const routes: Routes = [
  {
    path: '',
    component: PageDesktopComponent,
  },
];
@NgModule({
  declarations: [PageDesktopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,

    StoreModule.forFeature(fromDesktop.desktopFeatureKey, fromDesktop.reducer),
    EffectsModule.forFeature([DesktopEffects]),

    TuiAccordionModule,
    TuiLabelModule,
    TuiSvgModule,
    TuiAvatarModule,
    TuiMarkerIconModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiColorModule,
    TuiTextfieldControllerModule,
    TuiIslandModule,
    TuiBadgeModule,
    TuiLoaderModule,
    TuiCalendarModule,
  ],
  exports: [PageDesktopComponent, RouterModule],
})
export class PageDesktopModule {}
