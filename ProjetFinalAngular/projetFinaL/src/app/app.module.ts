import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http-interceptor-basic-auth.service';
import { FormsModule } from '@angular/forms';


import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { AddFormateursComponent } from './add-formateurs/add-formateurs.component';
import { ModifFormateursComponent } from './modif-formateurs/modif-formateurs.component';
import { FormationAssocieeComponent } from './formation-associee/formation-associee.component';
import { ListeCommerciauxComponent } from './liste-commerciaux/liste-commerciaux.component';
import { AddCommerciauxComponent } from './add-commerciaux/add-commerciaux.component';
import { ModifCommerciauxComponent } from './modif-commerciaux/modif-commerciaux.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { ContactsAssociesComponent } from './contacts-associes/contacts-associes.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddProspectComponent } from './add-prospect/add-prospect.component';
import { ListeProspectsComponent } from './liste-prospects/liste-prospects.component';
import { ModifProspectsComponent } from './modif-prospects/modif-prospects.component';
import { ContactAssocieComponent } from './contact-associe/contact-associe.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListeFormationsComponent,
    ModifFormationsComponent,
    AddFormationsComponent,
    FormateurAssocieComponent,
    ListeFormateursComponent,
    AddFormateursComponent,
    ModifFormateursComponent,
    FormationAssocieeComponent,
    ListeCommerciauxComponent,
    AddCommerciauxComponent,
    ModifCommerciauxComponent,
    ListeContactsComponent,
    ContactsAssociesComponent,
    AddContactComponent,
    AddProspectComponent,
    ListeProspectsComponent,
    ModifProspectsComponent,
    ContactAssocieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
