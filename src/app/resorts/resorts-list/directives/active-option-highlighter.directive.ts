import { Directive, Renderer2, HostListener, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appActiveOptionHighlighter]'
})
export class ActiveOptionHighlighterDirective implements OnInit, AfterViewInit {
    private filterOptions: HTMLCollection;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.filterOptions = this.elementRef.nativeElement.children;
    }

    ngAfterViewInit(): void {
        Array.from(this.filterOptions).forEach((filterOption: HTMLLIElement) => {
            this.renderer.listen(filterOption, 'click', (event: Event) => {
                const previousActiveElement: HTMLLIElement = this.elementRef.nativeElement.querySelector('.active');

                this.renderer.removeClass(previousActiveElement, 'active');
                this.renderer.addClass(event.target, 'active');
            });
        });
    }
}
