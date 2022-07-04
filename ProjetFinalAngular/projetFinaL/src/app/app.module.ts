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
import { ListeAdminsComponent } from './liste-admins/liste-admins.component';
import { ModifAdminsComponent } from './modif-admins/modif-admins.component';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';
import { ModifParticipantsComponent } from './modif-participants/modif-participants.component';
import { AddParticipantsComponent } from './add-participants/add-participants.component';
import { FormationAssocieParticipantComponent } from './formation-associe-participant/formation-associe-participant.component';
import { PaiementAssocieParticipantComponent } from './paiement-associe-participant/paiement-associe-participant.component';
import { RelanceAssocieParticipantComponent } from './relance-associe-participant/relance-associe-participant.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListeFormationsComponent,
    ModifFormationsComponent,
    AddFormationsComponent,
    FormateurAssocieComponent,
    ListeAdminsComponent,
    ModifAdminsComponent,
    AddAdminsComponent,
    ListeParticipantsComponent,
    ModifParticipantsComponent,
    AddParticipantsComponent,
    FormationAssocieParticipantComponent,
    PaiementAssocieParticipantComponent,
    RelanceAssocieParticipantComponent
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
