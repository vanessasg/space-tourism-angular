import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SpaceportComponent } from './spaceport/spaceport.component';
import { CapsuleComponent } from './capsule/capsule.component';
import { TechNavComponent } from './tech-nav/tech-nav.component';


@NgModule({
  declarations: [
    VehicleComponent,
    SpaceportComponent,
    CapsuleComponent,
    TechNavComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
