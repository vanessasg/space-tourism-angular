import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['../dest-comp.scss'],
})
export class EuropaComponent implements OnInit {
  data: any;
  europa: {
    description: '';
    distance: '';
    images: {
      png: '';
      webp: '';
    };
    name: '';
    travel: '';
  };

  constructor() {
    this.data = datas;
    this.europa = this.data.destinations[2];
  }

  ngOnInit(): void {}
}
