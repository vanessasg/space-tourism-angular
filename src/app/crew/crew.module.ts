import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';
import { DouglasComponent } from './douglas/douglas.component';
import { MarkComponent } from './mark/mark.component';
import { VictorComponent } from './victor/victor.component';
import { AnoushehComponent } from './anousheh/anousheh.component';
import { CrewNavComponent } from './crew-nav/crew-nav.component';


@NgModule({
  declarations: [
    DouglasComponent,
    MarkComponent,
    VictorComponent,
    AnoushehComponent,
    CrewNavComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule,
  ]
})
export class CrewModule { }
