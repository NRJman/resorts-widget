import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { TemperatureConverterDirective } from './temperature-converter.directive';
import * as fromTemperatureConverter from './host.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('TemperatureConverterDirective', () => {
    let fixture: ComponentFixture<fromTemperatureConverter.HostComponent>;
    let debugElement: DebugElement;
    let component: fromTemperatureConverter.HostComponent;
    let directive: TemperatureConverterDirective;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TemperatureConverterDirective,
                fromTemperatureConverter.HostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(fromTemperatureConverter.HostComponent);
        debugElement = fixture.debugElement;
        component = debugElement.componentInstance;
        directive = component.converterDirective;

        fixture.detectChanges();
    });

    it('should switch weather slider to the left value of index measurment', () => {
        console.log(component);
    });
});
