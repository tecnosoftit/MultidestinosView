import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlightResultComponent } from './flight-result/flight-result.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { ROUTES } from './flight.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    FlightDetailComponent,
    FlightResultComponent,
  ]
})

export class FlightModule { }

