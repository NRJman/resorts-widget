import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import * as fromActiveOptionHighlighter from './host/host.component';
import { ActiveOptionHighlighterDirective } from './active-option-highlighter.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ActiveOptionHighlighterDirective', () => {
    let fixture: ComponentFixture<fromActiveOptionHighlighter.HostComponent>;
    let component: fromActiveOptionHighlighter.HostComponent;
    let debugElement: DebugElement;
    let lastActiveItem: HTMLLIElement;
    let elementNextToActiveOne: HTMLLIElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ActiveOptionHighlighterDirective,
                fromActiveOptionHighlighter.HostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(fromActiveOptionHighlighter.HostComponent);
        debugElement = fixture.debugElement;
        component = debugElement.componentInstance;
        fixture.detectChanges();

        lastActiveItem = debugElement.query(By.css('.active')).nativeElement;
        elementNextToActiveOne = (lastActiveItem.nextElementSibling as HTMLLIElement);
    });

    it('should remove an "active" class from last active option on another option click', () => {
        elementNextToActiveOne.click();
        fixture.detectChanges();

        expect(lastActiveItem.classList.contains('active')).toBe(false);
    });

    it('should add an "active" class to the clicked option', () => {
        elementNextToActiveOne.click();
        fixture.detectChanges();

        expect(elementNextToActiveOne.classList.contains('active')).toBe(true);
    });
});
