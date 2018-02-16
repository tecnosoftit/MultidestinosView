import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutServiceComponent } from './about-service/about-service.component';
import { ROUTES } from './about.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    AboutServiceComponent,
    AboutUsComponent]
})

export class AboutModule { }
