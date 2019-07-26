import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResortsService } from '../resorts.service';
import { ResortEntity, WeatherInformation } from 'src/app/shared/models/resort-entity.model';
import { Unsubscriber } from 'src/app/shared/services/unsubscriber';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent extends Unsubscriber implements OnInit, OnDestroy {
  public resortWeather: WeatherInformation;
  public subscription: Subscription;

  constructor(private resortsService: ResortsService) {
    super();
  }

  ngOnInit() {
    this.resortWeather = this.resortsService.resortsList[0].weather;
    this.subscription = this.resortsService.changeActiveResort$$.pipe(
      takeUntil(this.subscribeController$$)
    )
    .subscribe((resort: ResortEntity) => {
      this.resortWeather = resort.weather;
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
