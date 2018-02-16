import { Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Contact/Us'
    },
    {
        path: 'Us',
        component: ContactUsComponent,
    },
];
