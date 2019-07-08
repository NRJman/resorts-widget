import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // I'm aware that it's not a best practice :)
})
export class AppComponent {
  title = 'resorts-widget';
}
