import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterResortsByPipe } from './pipes/filter-resorts-by.pipe';
import { ActiveOptionHighlighterDirective } from './directives/active-option-highlighter.directive';
import { ActiveResortHighlighterDirective } from './directives/active-resort-highlighter.directive';



@NgModule({
  declarations: [
    FilterResortsByPipe,
    ActiveOptionHighlighterDirective,
    ActiveResortHighlighterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterResortsByPipe,
    ActiveOptionHighlighterDirective,
    ActiveResortHighlighterDirective
  ]
})
export class SharedModule { }
