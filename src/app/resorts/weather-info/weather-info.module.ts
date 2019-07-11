import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureConverterDirective } from './temperature-converter.directive';
import { WeatherInfoComponent } from './weather-info.component';



@NgModule({
  declarations: [
    WeatherInfoComponent,
    TemperatureConverterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherInfoComponent
  ],
  providers: [
    { provide: TemperatureConverterDirective, useClass: TemperatureConverterDirective }
  ]
})
export class WeatherInfoModule { }
