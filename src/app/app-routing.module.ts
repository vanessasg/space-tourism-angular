import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { DestinationRoutingModule } from './destination/destination-routing.module';
import { CrewRoutingModule } from './crew/crew-routing.module';
import { TechnologyRoutingModule } from './technology/technology-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    component: HomeComponent,
    data: {animationState: 'Home'}
  },
  {
    path: 'destination',
    component: DestinationComponent,
    loadChildren: () => DestinationRoutingModule,
    data: {animationState: 'Destination'}
  },
  {
    path: 'crew',
    component: CrewComponent,
    loadChildren: () => CrewRoutingModule,
    data: {animationState: 'Crew'}
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    loadChildren: () => TechnologyRoutingModule,
    data: {animationState: 'Technology'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
