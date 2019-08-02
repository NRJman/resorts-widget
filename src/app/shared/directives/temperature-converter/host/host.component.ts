import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherInformation } from '../../../models/resort-entity.model';
import { resortsList } from 'db/resorts/resorts';
import { TemperatureConverterDirective } from '../temperature-converter.directive';

@Component({
    templateUrl: './host.component.html'
})
export class HostComponent implements OnInit {
    public resortWeather: WeatherInformation;
    @ViewChild(TemperatureConverterDirective, { static: false }) public converterDirective: TemperatureConverterDirective;
    private possibleResortItemIndex = Math.round(Math.random() * (resortsList.length - 1));

    ngOnInit(): void {
        this.resortWeather = resortsList[this.possibleResortItemIndex].weather;
    }
}
