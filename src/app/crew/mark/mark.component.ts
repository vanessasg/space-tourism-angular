import { Component, OnInit } from '@angular/core';
import datas from '../../../assets/data.json'

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['../crew-comp.scss']
})
export class MarkComponent implements OnInit {
  data: any
  mark: {
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
    this.mark = this.data.crew[1]
   }

  ngOnInit(): void {
  }

}
