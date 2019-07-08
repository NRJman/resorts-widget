import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class Unsubscriber implements OnDestroy {
    protected subscribeController$$: Subject<null> = new Subject();

    ngOnDestroy(): void {
        this.subscribeController$$.next(null);
        this.subscribeController$$.complete();
    }
}
