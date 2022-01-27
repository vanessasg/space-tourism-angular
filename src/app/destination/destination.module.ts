import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { MoonComponent } from './moon/moon.component';
import { MarsComponent } from './mars/mars.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component';
import { DestinationNavComponent } from './destination-nav/destination-nav.component';


@NgModule({
  declarations: [
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    DestinationNavComponent,
  ],
  imports: [CommonModule, DestinationRoutingModule],
})
export class DestinationModule {}
