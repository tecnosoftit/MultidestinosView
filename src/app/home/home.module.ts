import { NgModule } from '@angular/core';
import { ROUTES } from './home.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearcherComponent } from './searcher/searcher.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser/src/browser';


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    //HttpModule,
    //BrowserModule,
  ],
  declarations: [
    HomeComponent,
    SearcherComponent,
  ]
})

export class HomeModule { }
