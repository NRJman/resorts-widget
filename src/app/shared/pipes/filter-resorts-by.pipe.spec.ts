import { FilterResortsByPipe } from "./filter-resorts-by.pipe";
import { ResortEntity } from '../models/resort-entity.model';

describe('FilterResortsByPipe', () => {
    let pipe: FilterResortsByPipe;

    beforeEach(() => {
        pipe = new FilterResortsByPipe();
    });

    it('should filter resort items by exact type', () => {
        const resortsList: unknown = [
            { type: 'a', value: 'a' },
            { type: 'b', value: 'b' },
            { type: 'b', value: 'b' },
        ];

        expect(pipe.transform((resortsList as ResortEntity[]), 'a').length).toBe(1);
        expect(pipe.transform((resortsList as ResortEntity[]), 'b').length).toBe(2);
    });
});
