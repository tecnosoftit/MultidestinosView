import { Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { AboutServiceComponent } from './about-service/about-service.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/About/Us'
    },
    {
        path: 'Us',
        component: AboutUsComponent,
    },
    {
        path: 'Service',
        component: AboutServiceComponent,
    },
];
