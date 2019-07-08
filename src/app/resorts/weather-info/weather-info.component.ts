import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResortsService } from '../resorts.service';
import { ResortEntity } from 'src/app/shared/resort-entity.model';
import { Unsubscriber } from 'src/app/shared/unsubscriber';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent extends Unsubscriber implements OnInit, OnDestroy {
  public resort: ResortEntity;
  public subscription: Subscription;

  constructor(private resortsService: ResortsService) {
    super();
  }

  ngOnInit() {
    this.resort = this.resortsService.resortsList[0];
    this.subscription = this.resortsService.changeActiveResort$$.pipe(
      takeUntil(this.subscribeController$$)
    )
    .subscribe((resort: ResortEntity) => {
      this.resort = resort;
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
