import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { WeatherInformation } from 'src/app/shared/models/resort-entity.model';

export type ConvertionType = ('celcius' | 'fahrenheit');

interface TemperatureIndexes {
    temperature: number;
    water: number;
}

interface DirectiveContext {
    $implicit: TemperatureIndexes;
    controller: {
        prev(): void,
        next(): void
    };
    index: number;
    convertionTypes: ConvertionType[];
}

@Directive({
    selector: '[appTemperatureConverter]'
})
export class TemperatureConverterDirective implements OnInit {
    public index = 0;
    public readonly convertionTypes: ConvertionType[] = ['celcius', 'fahrenheit'];
    @Input('appTemperatureConverterFrom') public set weatherInfo(weatherInformation: WeatherInformation) {
        this._weatherInfo = weatherInformation;
        this.index = 0;
        this.updateContextValue();
    }
    public get weatherInfo(): WeatherInformation {
        return this._weatherInfo;
    }
    private _weatherInfo: WeatherInformation = null;
    private context: DirectiveContext = null;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    private next(): void {
        this.index++;

        if (this.index >= this.convertionTypes.length) {
            this.index = 0;
        }

        this.updateContextValue();
    }

    private prev(): void {
        this.index--;

        if (this.index < 0) {
            this.index = this.convertionTypes.length - 1;
        }

        this.updateContextValue();
    }

    private updateContextValue(): void {
        if (this.context) {
            this.context.index = this.index;
            this.context.$implicit = {
                temperature: this.weatherInfo.temperature[this.convertionTypes[this.index]],
                water: this.weatherInfo.water[this.convertionTypes[this.index]],
            };
        }
    }

    ngOnInit() {
        this.context = {
            $implicit: {
                temperature: this.weatherInfo.temperature[this.convertionTypes[this.index]],
                water: this.weatherInfo.water[this.convertionTypes[this.index]],
            },
            controller: {
                prev: this.prev.bind(this), // could also be as prev() => this.next()
                next: this.next.bind(this)  // could also be as next() => this.next()
            },
            index: this.index,
            convertionTypes: this.convertionTypes
        };

        this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    }

}
