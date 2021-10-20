import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DataprocessingComponent } from './dataprocessing/dataprocessing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PersonaldataComponent,
    ContactsComponent,
    DataprocessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHz2q-7PTKSpViFmMO9B7igiItqDxXZcQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
