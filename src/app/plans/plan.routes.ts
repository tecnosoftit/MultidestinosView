import { Routes } from '@angular/router';

import { PlanResultComponent } from './plan-result/plan-result.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Plans/Search'
    },
    {
        path: 'Search',
        component: PlanResultComponent,
    },
    {
        path: 'Detail',
        component: PlanDetailComponent,
    },
];
