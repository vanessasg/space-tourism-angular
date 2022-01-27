import { DestinationComponent } from './destination.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoonComponent } from './moon/moon.component';
import { MarsComponent } from './mars/mars.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component';

const routes: Routes = [
  { path: 'moon', component: MoonComponent, data:{animationState: 'Moon'} },
  { path: 'mars', component: MarsComponent, data:{animationState: 'Mars'} },
  { path: 'europa', component: EuropaComponent, data:{animationState: 'Europa'} },
  { path: 'titan', component: TitanComponent, data:{animationState: 'Titan'} },
  { path: '', redirectTo: '/destination/moon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
