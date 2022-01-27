import { Component, OnInit, DoCheck } from '@angular/core';
import datas from '../../../assets/data.json';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['../tech-comp.scss'],
})
export class VehicleComponent implements OnInit, DoCheck {
  data: any;
  vehicle: {
    description: string;
    images: {
      landscape: string;
      portrait: string;
    };
    name: string;
  }
  techImage: string;

  constructor() {
    this.data = datas;
    this.vehicle = this.data.technology[0];
  }

  ngOnInit(): void {
    this.setImage();
  }

  ngDoCheck() {
    this.setImage();
  }
  setImage() {
    if (window.innerWidth > 768) {
      this.techImage = this.vehicle.images.portrait;
    } else {
      this.techImage = this.vehicle.images.landscape;
    }
  }
}
