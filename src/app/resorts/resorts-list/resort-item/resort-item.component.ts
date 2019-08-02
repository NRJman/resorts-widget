import { Component, OnInit, Input } from '@angular/core';
import { ResortEntity } from 'src/app/shared/models/resort-entity.model';
import { resortsList } from 'db/resorts/resorts';

@Component({
  selector: 'app-resort-item',
  templateUrl: './resort-item.component.html',
  styleUrls: ['./resort-item.component.scss']
})
export class ResortItemComponent implements OnInit {
  @Input() public resort: ResortEntity = resortsList[0];

  constructor() { }

  ngOnInit() {
  }

}
