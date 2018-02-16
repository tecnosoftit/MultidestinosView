import { Routes } from '@angular/router';

import { FlightResultComponent } from './flight-result/flight-result.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Flight/Search'
    },
    {
        path: 'Search',
        component: FlightResultComponent,
    },
    {
        path: 'Detail',
        component: FlightDetailComponent,
    },
];
