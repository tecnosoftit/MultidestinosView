import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanResultComponent } from './plan-result/plan-result.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { ROUTES } from './plan.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    PlanResultComponent,
    PlanDetailComponent]
})

export class PlansModule { }

