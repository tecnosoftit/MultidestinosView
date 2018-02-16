import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ROUTES } from './contact.routes';


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHmcfUR73qVO9nLRk5wmiHgB6wfymca2A'
    })
  ],
  declarations: [
    ContactUsComponent,
  ]
})

export class ContactModule { }
