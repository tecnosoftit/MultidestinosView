import { Routes } from '@angular/router';

import { HotelResultsComponent } from './hotel-results/hotel-results.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Hotels/Search'
    },
    {
        path: 'Search',
        component: HotelResultsComponent,
    },
    {
        path: 'Detail',
        component: HotelDetailComponent,
    },
];