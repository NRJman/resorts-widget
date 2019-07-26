import { PipeTransform, Pipe } from '@angular/core';
import { ResortEntity } from '../models/resort-entity.model';

@Pipe({
    name: 'filterResortsBy'
})
export class FilterResortsByPipe implements PipeTransform {
    transform(resortsList: ResortEntity[], filterKey: string): ResortEntity[] {
        if (!filterKey) {
            return resortsList;
        }

        return resortsList.filter((resort: ResortEntity) => {
            return resort.type === filterKey;
        });
    }
}
