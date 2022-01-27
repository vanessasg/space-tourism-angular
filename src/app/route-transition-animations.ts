import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const mainRouteGoLeft = 'Home=>Destination, Home=>Crew, Home=>Technology, Destination=>Crew, Destination=>Technology, Crew=> Technology'
const destRouteGoLeft = 'Moon=>Mars, Moon=>Europa, Moon=>Titan, Mars=>Europa, Mars=>Titan, Europa=>Titan'
const crewRouteGoLeft = 'Douglas=>Mark, Douglas=>Victor, Douglas=>Anou, Mark=>Victor, Mark=>Anou, Victor=>Anou'
const techRouteGoLeft = 'One=>Two, One=>Three, Two=>Three'

const mainRouteGoRight = 'Destination=>Home, Crew=>Home, Crew=>Destination, Technology=>Home, Technology=>Crew, Technology=>Home'
const destRouteGoRight = 'Titan=>Europa, Titan=>Mars, Titan=>Moon, Europa=>Mars, Europa=>Moon, Mars=>Moon'
const crewRouteGoRight = 'Anou=>Victor, Anou=>Mark, Anou=>Douglas, Victor=>Mark, Victor=>Douglas, Mark=>Douglas'
const techRouteGoRight = 'Three=>Two, Three=>One, Two=>One'

export const routeTransitionAnimation = trigger('pageAnimation', [

  transition(`${mainRouteGoLeft}, ${destRouteGoLeft}, ${crewRouteGoLeft}, ${techRouteGoLeft}`, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'relative',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':enter', [
        style({ opacity: 0, right: '100%' }),
        animate('300ms ease-in-out', style({ opacity: 1, right: '0%' })),
      ]),
      query(':leave', [animate('300ms ease-in-out', style({ opacity: 0, right: '100%' }))]),
    ]),
  ]),

  transition(`${mainRouteGoRight}, ${destRouteGoRight}, ${crewRouteGoRight}, ${techRouteGoRight}`, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':enter', [
        style({ opacity: 0, left: '100%' }),
        animate('300ms ease-in-out', style({ opacity: 1, left: '0%' })),
      ]),
      query(':leave', [animate('300ms ease-in-out', style({ opacity: 0, left: '100%' }))]),
    ]),
  ])
]);
