import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json'

@Component({
  selector: 'app-douglas',
  templateUrl: './douglas.component.html',
  styleUrls: ['../crew-comp.scss']
})
export class DouglasComponent implements OnInit {
  data: any
  douglas: {
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
    this.douglas = this.data.crew[0]
    //console.log(this.douglas)
  }


  ngOnInit(): void {
  }

}
