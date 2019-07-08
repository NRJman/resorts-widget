import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResortsListComponent } from './resorts/resorts-list/resorts-list.component';
import { WeatherInfoComponent } from './resorts/weather-info/weather-info.component';
import { SocialInfoComponent } from './resorts/social-info/social-info.component';
import { ResortItemComponent } from './resorts/resorts-list/resort-item/resort-item.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ResortsListComponent,
    WeatherInfoComponent,
    SocialInfoComponent,
    ResortItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
