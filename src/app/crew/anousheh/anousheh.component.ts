import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json'

@Component({
  selector: 'app-anousheh',
  templateUrl: './anousheh.component.html',
  styleUrls: ['../crew-comp.scss']
})
export class AnoushehComponent implements OnInit {

  data: any
  anousheh: {
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
    this.anousheh = this.data.crew[3]
  }

  ngOnInit(): void {
  }

}
