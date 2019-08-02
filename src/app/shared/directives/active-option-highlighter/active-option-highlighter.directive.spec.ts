import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { ActiveOptionHighlighterDirective } from './active-option-highlighter.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
    templateUrl: './host/host.component.html'
})
export class HostComponent { }

describe('ActiveOptionHighlighterDirective', () => {
    let fixture: ComponentFixture<HostComponent>;
    let component: HostComponent;
    let debugElement: DebugElement;
    let lastActiveItem: HTMLLIElement;
    let elementNextToActiveOne: HTMLLIElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ActiveOptionHighlighterDirective,
                HostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
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
