import { Directive, AfterViewInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appActiveResortHighlighter]'
})
export class ActiveResortHighlighterDirective implements AfterViewInit {

    constructor(private renderer: Renderer2, private templateRef: ElementRef) { }

    @HostListener('click', ['$event.path'])
    onScrollbarClick(eventPath: HTMLElement[]) {
        let newActiveResortItem: HTMLElement;
        const isItResortItemClick: boolean = eventPath.some(item => {
            if (item.classList && item.classList.contains('activity-row')) {
                newActiveResortItem = item;
                return true;
            } else if (item.tagName && item.tagName.toLowerCase() === 'app-resort-item') {
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

        if (resortItems[0].children.length > 0) {
            this.renderer.addClass(resortItems[0].firstElementChild, 'active');

            return;
        }

        this.renderer.addClass(resortItems[0], 'active');
    }
}
