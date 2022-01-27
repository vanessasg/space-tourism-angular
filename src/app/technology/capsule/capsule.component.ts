import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['../tech-comp.scss']
})
export class CapsuleComponent implements OnInit {
  data: any;
  capsule: {
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
    this.capsule = this.data.technology[2];
  }

  ngOnInit(): void {
  }

}
