import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormulairesComponent } from './formulaires/formulaires.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    ContactsComponent,
    PresentationsComponent,
    ExperiencesComponent,
    FormulairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
