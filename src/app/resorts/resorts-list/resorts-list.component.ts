import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResortsService } from '../resorts.service';
import { ResortEntity } from 'src/app/shared/models/resort-entity.model';
import { FilterOption } from 'src/app/shared/models/filter-option.model';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Unsubscriber } from 'src/app/shared/services/unsubscriber';

@Component({
  selector: 'app-resorts-list',
  templateUrl: './resorts-list.component.html',
  styleUrls: ['./resorts-list.component.scss']
})
export class ResortsListComponent extends Unsubscriber implements OnInit, OnDestroy {
  public filterOptions: FilterOption[];
  public resortsList: ResortEntity[];
  public activeFilterOption: FilterOption;
  public activeResort: ResortEntity;
  public activeResortSubscription: Subscription;

  constructor(private resortsService: ResortsService) {
    super();
  }

  public setActiveFilterOption(option: FilterOption): void {
    this.resortsService.changeActiveFilterOption$$.next(option);
  }

  public setActiveResortItem(resort: ResortEntity): void {
    this.resortsService.changeActiveResort$$.next(resort);
  }

  public trackByAddress(index: number, resort: ResortEntity): string {
    return resort.address;
  }

  ngOnInit(): void {
    this.filterOptions = this.resortsService.filterOptions;
    this.resortsList = this.resortsService.resortsList;
    this.activeFilterOption = null;
    this.activeResort = this.resortsList[0];

    this.activeResortSubscription = this.resortsService.changeActiveFilterOption$$
      .pipe(
        takeUntil(this.subscribeController$$)
      )
      .subscribe((option: FilterOption) => {
        this.activeFilterOption = option;
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
