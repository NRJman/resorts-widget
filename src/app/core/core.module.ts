import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInfoModule } from '../resorts/weather-info/weather-info.module';

import { ResortItemComponent } from '../resorts/resorts-list/resort-item/resort-item.component';
import { ResortsListComponent } from '../resorts/resorts-list/resorts-list.component';
import { SocialInfoComponent } from '../resorts/social-info/social-info.component';
import { SharedModule } from '../shared/shared.module';
import { ActiveOptionHighlighterDirective } from '../resorts/resorts-list/directives/active-option-highlighter.directive';
import { ActiveResortHighlighterDirective } from '../resorts/resorts-list/directives/active-resort-highlighter.directive';



@NgModule({
  declarations: [
    ResortsListComponent,
    SocialInfoComponent,
    ResortItemComponent,
    ActiveOptionHighlighterDirective,
    ActiveResortHighlighterDirective
  ],
  imports: [
    CommonModule,
    WeatherInfoModule,
    SharedModule
  ],
  exports: [
    WeatherInfoModule,
    ResortsListComponent,
    SocialInfoComponent
  ]
})
export class CoreModule { }
