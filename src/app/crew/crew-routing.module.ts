import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DouglasComponent } from './douglas/douglas.component';
import { MarkComponent } from './mark/mark.component';
import { VictorComponent } from './victor/victor.component';
import { AnoushehComponent } from './anousheh/anousheh.component';

const routes: Routes = [
  {path: 'douglas-hurley', component: DouglasComponent, data: {animationState: 'Douglas'}},
  {path: 'mark-shuttleworth', component: MarkComponent, data: {animationState: 'Mark'}},
  {path: 'victor-glover', component: VictorComponent, data: {animationState: 'Victor'}},
  {path: 'anousheh-ansari', component: AnoushehComponent, data: {animationState: 'Anou'}},
  {path: '', redirectTo: '/crew/douglas-hurley', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewRoutingModule { }
