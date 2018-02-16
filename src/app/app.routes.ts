import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full',
    },
    {
        path: 'Inicio',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'Hotels',
        loadChildren: './hotels/hotels.module#HotelsModule',
    },
    {
        path: 'Contact',
        loadChildren: './contact/contact.module#ContactModule',
  },
  {
        path: 'About',
        loadChildren: './about/about.module#AboutModule',
  },
  {
        path: 'Plans',
        loadChildren: './plans/plan.module#PlansModule',
  },
  {
    path: 'Flight',
        loadChildren: './flight/flight.module#FlightModule',
  },

];
