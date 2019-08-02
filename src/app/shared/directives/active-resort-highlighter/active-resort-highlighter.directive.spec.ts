import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import * as fromActiveResortHighlighter from './host/host.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActiveResortHighlighterDirective } from './active-resort-highlighter.directive';

describe('ActiveResortHighlighterDirective', () => {
    let fixture: ComponentFixture<fromActiveResortHighlighter.HostComponent>;
    let component: fromActiveResortHighlighter.HostComponent;
    let debugElement: DebugElement;
    let lastActiveItem: HTMLDivElement;
    let elementNextToActiveOne: HTMLDivElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ActiveResortHighlighterDirective,
                fromActiveResortHighlighter.HostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(fromActiveResortHighlighter.HostComponent);
        debugElement = fixture.debugElement;
        component = debugElement.componentInstance;
        lastActiveItem = debugElement.query(By.css('.active')).nativeElement;
        elementNextToActiveOne = (lastActiveItem.nextElementSibling as HTMLDivElement);

        fixture.detectChanges();
    });

    it('should remove an "active" class from last active resort on another resort click', () => {
        elementNextToActiveOne.click();
        fixture.detectChanges();

        expect(lastActiveItem.classList.contains('active')).toBe(false);
    });

    it('should add an "active" class to the clicked resort', () => {
        elementNextToActiveOne.click();
        fixture.detectChanges();

        expect(elementNextToActiveOne.classList.contains('active')).toBe(true);
    });
});
