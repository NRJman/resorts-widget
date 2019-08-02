import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { TemperatureConverterDirective, ConvertionType } from './temperature-converter.directive';
import { DebugElement, Component, OnInit, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WeatherInformation } from '../../models/resort-entity.model';
import { resortsList } from 'db/resorts/resorts';

@Component({
    templateUrl: './host/host.component.html'
})
export class HostComponent implements OnInit {
    public resortWeather: WeatherInformation;
    @ViewChild(TemperatureConverterDirective, { static: false }) public converterDirective: TemperatureConverterDirective;
    private possibleResortItemIndex = Math.round(Math.random() * (resortsList.length - 1));

    ngOnInit(): void {
        this.resortWeather = resortsList[this.possibleResortItemIndex].weather;
    }
}

describe('TemperatureConverterDirective', () => {
    let fixture: ComponentFixture<HostComponent>;
    let debugElement: DebugElement;
    let component: HostComponent;
    let directive: TemperatureConverterDirective;
    let temperatureCtrlLeft: DebugElement;
    let temperatureCtrlRight: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TemperatureConverterDirective,
                HostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        debugElement = fixture.debugElement;
        component = debugElement.componentInstance;

        fixture.detectChanges();

        temperatureCtrlLeft = debugElement.query(By.css('.temperature-controller-left'));
        temperatureCtrlRight = debugElement.query(By.css('.temperature-controller-right'));
        directive = component.converterDirective;
    });

    it('should correctly change the current temperature measurment value', () => {
        const lastConvertionTypeId: number = directive.index;
        const lastConvertionType: ConvertionType = directive.convertionTypes[lastConvertionTypeId];
        let isLastValue = false;

        if (directive.index === 0) {
            isLastValue = true;
        }

        temperatureCtrlLeft.triggerEventHandler('click', null);
        fixture.detectChanges();

        if (isLastValue) {
            expect(directive.index).toEqual(directive.convertionTypes.length - 1);
        } else {
            expect(directive.index).toEqual(lastConvertionTypeId - 1);
        }

        expect(directive.convertionTypes[directive.index]).not.toEqual(lastConvertionType);
    });

    it('should correctly change the current temperature measurment value', () => {
        const lastConvertionTypeId: number = directive.index;
        const lastConvertionType: ConvertionType = directive.convertionTypes[lastConvertionTypeId];
        let isLastValue = false;

        if (directive.index === directive.convertionTypes.length - 1) {
            isLastValue = true;
        }

        temperatureCtrlRight.triggerEventHandler('click', null);
        fixture.detectChanges();

        if (isLastValue) {
            expect(directive.index).toEqual(0);
        } else {
            expect(directive.index).toEqual(lastConvertionTypeId + 1);
        }

        expect(directive.convertionTypes[directive.index]).not.toEqual(lastConvertionType);
    });

    it('should update air temperature value in a template on "prev" button click', () => {
        const airTemperatureElement: DebugElement = debugElement.query(By.css('#airTemperature'));
        const lastAirTemperatureValueInTemplate: string = airTemperatureElement.nativeElement.textContent;
        let updatedAirTemperatureValueInTemplate: string;
        let updatedConvertionType: string;

        temperatureCtrlLeft.triggerEventHandler('click', null);
        fixture.detectChanges();
        updatedAirTemperatureValueInTemplate = airTemperatureElement.nativeElement.textContent;
        updatedConvertionType = directive.convertionTypes[directive.index];

        expect(updatedAirTemperatureValueInTemplate).not.toBe(lastAirTemperatureValueInTemplate);
        expect(+updatedAirTemperatureValueInTemplate).toBe(directive.weatherInfo.temperature[updatedConvertionType]);
    });

    it('should update water temperature value in a template on "prev" button click', () => {
        const waterTemperatureElement: DebugElement = debugElement.query(By.css('#waterTemperature'));
        const lastWaterTemperatureValueInTemplate: string = waterTemperatureElement.nativeElement.textContent;
        let updatedWaterTemperatureValueInTemplate: string;
        let updatedConvertionType: string;

        temperatureCtrlLeft.triggerEventHandler('click', null);
        fixture.detectChanges();
        updatedWaterTemperatureValueInTemplate = waterTemperatureElement.nativeElement.textContent;
        updatedConvertionType = directive.convertionTypes[directive.index];

        expect(updatedWaterTemperatureValueInTemplate).not.toBe(lastWaterTemperatureValueInTemplate);
        expect(+updatedWaterTemperatureValueInTemplate).toBe(directive.weatherInfo.water[updatedConvertionType]);
    });

    it('should update air temperature value in a template on "next" button click', () => {
        const airTemperatureElement: DebugElement = debugElement.query(By.css('#airTemperature'));
        const lastAirTemperatureValueInTemplate: string = airTemperatureElement.nativeElement.textContent;
        let updatedAirTemperatureValueInTemplate: string;
        let updatedConvertionType: string;

        temperatureCtrlLeft.triggerEventHandler('click', null);
        fixture.detectChanges();
        updatedAirTemperatureValueInTemplate = airTemperatureElement.nativeElement.textContent;
        updatedConvertionType = directive.convertionTypes[directive.index];

        expect(updatedAirTemperatureValueInTemplate).not.toBe(lastAirTemperatureValueInTemplate);
        expect(+updatedAirTemperatureValueInTemplate).toBe(directive.weatherInfo.temperature[updatedConvertionType]);
    });

    it('should update water temperature value in a template on "next" button click', () => {
        const waterTemperatureElement: DebugElement = debugElement.query(By.css('#waterTemperature'));
        const lastWaterTemperatureValueInTemplate: string = waterTemperatureElement.nativeElement.textContent;
        let updatedWaterTemperatureValueInTemplate: string;
        let updatedConvertionType: string;

        temperatureCtrlLeft.triggerEventHandler('click', null);
        fixture.detectChanges();
        updatedWaterTemperatureValueInTemplate = waterTemperatureElement.nativeElement.textContent;
        updatedConvertionType = directive.convertionTypes[directive.index];

        expect(updatedWaterTemperatureValueInTemplate).not.toBe(lastWaterTemperatureValueInTemplate);
        expect(+updatedWaterTemperatureValueInTemplate).toBe(directive.weatherInfo.water[updatedConvertionType]);
    });
});
