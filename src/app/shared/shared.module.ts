import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterResortsByPipe } from './pipes/filter-resorts-by.pipe';
import { ActiveOptionHighlighterDirective } from './directives/active-option-highlighter/active-option-highlighter.directive';
import { ActiveResortHighlighterDirective } from './directives/active-resort-highlighter/active-resort-highlighter.directive';
import { TemperatureConverterDirective } from './directives/temperature-converter/temperature-converter.directive';



@NgModule({
  declarations: [
    FilterResortsByPipe,
    ActiveOptionHighlighterDirective,
    ActiveResortHighlighterDirective,
    TemperatureConverterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterResortsByPipe,
    ActiveOptionHighlighterDirective,
    ActiveResortHighlighterDirective,
    TemperatureConverterDirective
  ]
})
export class SharedModule { }
