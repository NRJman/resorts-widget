import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResortEntity, SocialInformation } from 'src/app/shared/models/resort-entity.model';
import { Subscription } from 'rxjs';
import { ResortsService } from '../resorts.service';
import { Unsubscriber } from 'src/app/shared/services/unsubscriber';
import { takeUntil } from 'rxjs/operators';
import { resortsList } from 'db/resorts/resorts';


@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent extends Unsubscriber implements OnInit, OnDestroy {
  public resortSocialInfo: SocialInformation = resortsList[0].social_info;
  public subscription: Subscription;

  constructor(private resortsService: ResortsService) {
    super();
  }

  ngOnInit() {
    this.subscription = this.resortsService.changeActiveResort$$
      .pipe(
          takeUntil(this.subscribeController$$)
      )
      .subscribe((resort: ResortEntity) => {
        this.resortSocialInfo = resort.social_info;
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
