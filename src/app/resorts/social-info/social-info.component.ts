import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResortEntity } from 'src/app/shared/resort-entity.model';
import { Subscription } from 'rxjs';
import { ResortsService } from '../resorts.service';
import { Unsubscriber } from 'src/app/shared/unsubscriber';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent extends Unsubscriber implements OnInit, OnDestroy {
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
