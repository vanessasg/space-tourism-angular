import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json'

@Component({
  selector: 'app-victor',
  templateUrl: './victor.component.html',
  styleUrls: ['../crew-comp.scss']
})
export class VictorComponent implements OnInit {
  data: any
  victor:{
    bio: '',
    images: {
      png: '',
      webp: ''
    },
    name: '',
    role: ''
  }

  constructor() {
    this.data = datas
    this.victor = this.data.crew[2]
   }

  ngOnInit(): void {
  }

}
