import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInfoComponent } from './weather-info.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WeatherInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WeatherInfoComponent
  ]
})
export class WeatherInfoModule { }
