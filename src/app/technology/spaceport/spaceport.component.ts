import { Component, OnInit, DoCheck } from '@angular/core';
import datas from '../../../assets/data.json';

@Component({
  selector: 'app-spaceport',
  templateUrl: './spaceport.component.html',
  styleUrls: ['../tech-comp.scss']
})
export class SpaceportComponent implements OnInit, DoCheck {
  data: any
  spaceport: {
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
    this.spaceport = this.data.technology[1];
   }

  ngOnInit(): void {
    this.setImage()
  }

  ngDoCheck(): void {
      this.setImage()
  }
  setImage() {
    if (window.innerWidth > 768) {
      this.techImage = this.spaceport.images.portrait;
    } else {
      this.techImage = this.spaceport.images.landscape;
    }
  }

}
