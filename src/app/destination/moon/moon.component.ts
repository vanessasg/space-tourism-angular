import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json'

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['../dest-comp.scss']
})
export class MoonComponent implements OnInit {
  data: any
  moon: {
    description: '',
    distance: '',
    images: {
      png: '',
      webp: ''
    },
    name: '',
    travel: ''
  }

  constructor() {
    this.data = datas
    this.moon = this.data.destinations[0]
    //console.log(this.moon)
  }

  ngOnInit(): void {
  }

}
