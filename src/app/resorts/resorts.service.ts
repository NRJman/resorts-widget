import { Injectable } from '@angular/core';
import { ResortEntity } from '../shared/models/resort-entity.model';
import { Subject } from 'rxjs';
import { FilterOption } from '../shared/models/filter-option.model';

@Injectable({
    providedIn: 'root'
})
export class ResortsService {
    public changeActiveFilterOption$$: Subject<FilterOption> = new Subject();
    public changeActiveResort$$: Subject<ResortEntity> = new Subject();
    public readonly filterOptions: FilterOption[] = ['Cheap', 'Mid-price', 'High', 'Disrespectful'];
}
