import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json'

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['../dest-comp.scss']
})
export class MarsComponent implements OnInit {
  data: any
  mars: {
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
    this.mars = this.data.destinations[1]
    //console.log(this.mars)
  }

  ngOnInit(): void {
  }

}
