import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelResultsComponent } from './hotel-results/hotel-results.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { ROUTES } from './hotels.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    HotelResultsComponent,
    HotelDetailComponent]
})

export class HotelsModule { }
