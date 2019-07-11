import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInfoModule } from '../resorts/weather-info/weather-info.module';

import { ResortItemComponent } from '../resorts/resorts-list/resort-item/resort-item.component';
import { ResortsListComponent } from '../resorts/resorts-list/resorts-list.component';
import { SocialInfoComponent } from '../resorts/social-info/social-info.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ResortsListComponent,
    SocialInfoComponent,
    ResortItemComponent
  ],
  imports: [
    CommonModule,
    WeatherInfoModule,
    SharedModule
  ],
  exports: [
    WeatherInfoModule,
    ResortsListComponent,
    SocialInfoComponent,
    ResortItemComponent
  ]
})
export class CoreModule { }
