import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SpaceportComponent } from './spaceport/spaceport.component';
import { CapsuleComponent } from './capsule/capsule.component';

const routes: Routes = [
  {path: 'vehicle', component: VehicleComponent, data: {animationState: 'One'}},
  {path: 'spaceport', component: SpaceportComponent, data: {animationState: 'Two'}},
  {path: 'capsule', component: CapsuleComponent, data: {animationState: 'Three'}},
  {path:'', redirectTo: '/technology/vehicle', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
