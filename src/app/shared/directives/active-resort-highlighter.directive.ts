import { Directive, AfterViewInit, Renderer2, ElementRef, AfterViewChecked, HostListener } from '@angular/core';
import { ResortsService } from '../../resorts/resorts.service';

@Directive({
    selector: '[appActiveResortHighlighter]'
})
export class ActiveResortHighlighterDirective implements AfterViewInit, AfterViewChecked {
    private visibleResortItems: HTMLCollection;

    constructor(
        private renderer: Renderer2,
        private templateRef: ElementRef,
        private resortsService: ResortsService
    ) { }

    @HostListener('click', ['$event', '$event.path'])
    onScrollbarClick(event: Event, eventPath: HTMLElement[]) {
        let newActiveResortItem: HTMLElement;
        const isItResortItemClick: boolean = eventPath.some(item => {
            if (item.tagName.toLowerCase() === 'app-resort-item') {
                newActiveResortItem = (item.firstElementChild as HTMLElement);

                return true;
            }

            return false;
        });

        if (isItResortItemClick) {
            const previousActiveResortItem: HTMLElement = this.templateRef.nativeElement.querySelector('.active');

            if (previousActiveResortItem) {
                this.renderer.removeClass(previousActiveResortItem, 'active');
            }

            this.renderer.addClass(newActiveResortItem, 'active');
        }
    }

    ngAfterViewInit(): void {
        const resortItems: HTMLCollection = this.templateRef.nativeElement.children;

        this.visibleResortItems = resortItems;
        this.renderer.addClass(resortItems[0].firstElementChild, 'active');
    }

    ngAfterViewChecked(): void {
        this.visibleResortItems = this.templateRef.nativeElement.children;
    }
}
