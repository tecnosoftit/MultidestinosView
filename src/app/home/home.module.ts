import { NgModule } from '@angular/core';
import { ROUTES } from './home.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearcherComponent } from './searcher/searcher.component';


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    HomeComponent,
    SearcherComponent,
  ]
})

export class HomeModule { }
