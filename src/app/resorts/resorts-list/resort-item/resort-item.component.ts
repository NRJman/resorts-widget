import { Component, OnInit, Input } from '@angular/core';
import { ResortEntity } from 'src/app/shared/models/resort-entity.model';

@Component({
  selector: 'app-resort-item',
  templateUrl: './resort-item.component.html',
  styleUrls: ['./resort-item.component.scss']
})
export class ResortItemComponent implements OnInit {
  @Input() public resort: ResortEntity;

  constructor() { }

  ngOnInit() {
  }

}
