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
];
