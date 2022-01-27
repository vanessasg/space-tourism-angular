import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['../dest-comp.scss'],
})
export class TitanComponent implements OnInit {
  data: any;
  titan: {
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
    this.titan = this.data.destinations[3];
  }

  ngOnInit(): void {}
}
