import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http-interceptor-basic-auth.service';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { ListeAssistantsComponent } from './liste-assistants/liste-assistants.component';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { ModifAssistantsComponent } from './modif-assistants/modif-assistants.component';


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


import { ModifAdminsComponent } from './modif-admins/modif-admins.component';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';
import { ModifParticipantsComponent } from './modif-participants/modif-participants.component';
import { AddParticipantsComponent } from './add-participants/add-participants.component';
import { FormationAssocieParticipantComponent } from './formation-associe-participant/formation-associe-participant.component';
import { PaiementAssocieParticipantComponent } from './paiement-associe-participant/paiement-associe-participant.component';
import { RelanceAssocieParticipantComponent } from './relance-associe-participant/relance-associe-participant.component';
import { ListeAdminsComponent } from './liste-admins/liste-admins.component';
import { PagePersoComponent } from './page-perso/page-perso.component';
import { ModifPasswordComponent } from './modif-password/modif-password.component';
import { BodyComponent } from './body/body.component';
import { PageFormateurComponent } from './page-formateur/page-formateur.component';
import { PageParticipantComponent } from './page-participant/page-participant.component';
import { FooterComponent } from './footer/footer.component';
import { ParticipantAssocieFormationComponent } from './participant-associe-formation/participant-associe-formation.component';
import { PaiementAssociePFComponent } from './paiement-associe-pf/paiement-associe-pf.component';
import { RelanceAssociePFComponent } from './relance-associe-pf/relance-associe-pf.component';
import { PageAssistantComponent } from './page-assistant/page-assistant.component';
import { PageCommercialeComponent } from './page-commerciale/page-commerciale.component';
import { AppelProspectComponent } from './appel-prospect/appel-prospect.component';
import { RdvProspectComponent } from './rdv-prospect/rdv-prospect.component';
import { ConvertirProspectComponent } from './convertir-prospect/convertir-prospect.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { HeaderComponent } from './header/header.component';
import { HeaderAssistantComponent } from './header-assistant/header-assistant.component';
import { HeaderCommerciauxComponent } from './header-commerciaux/header-commerciaux.component';
import { HeaderFormateurComponent } from './header-formateur/header-formateur.component';
import { HeaderParticipantComponent } from './header-participant/header-participant.component';
import { AboutComponent } from './about/about.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AfficherQuizComponent } from './afficher-quiz/afficher-quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ListeQuizComponent } from './liste-quiz/liste-quiz.component';
import { PasserQuizComponent } from './passer-quiz/passer-quiz.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AppComponent,
    AuthComponent,
    ListeFormationsComponent,
    ModifFormationsComponent,
    AddFormationsComponent,
    FormateurAssocieComponent,

    ListeAssistantsComponent,
    AddAssistantComponent,
    ModifAssistantsComponent,


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
    ContactAssocieComponent,

    ListeAdminsComponent,
    ModifAdminsComponent,
    AddAdminsComponent,
    ListeParticipantsComponent,
    ModifParticipantsComponent,
    AddParticipantsComponent,
    FormationAssocieParticipantComponent,
    PaiementAssocieParticipantComponent,
    RelanceAssocieParticipantComponent,
    PagePersoComponent,
    ModifPasswordComponent,
    PageFormateurComponent,
    PageParticipantComponent,
    ParticipantAssocieFormationComponent,
    PaiementAssociePFComponent,
    RelanceAssociePFComponent,
    PageAssistantComponent,
    PageCommercialeComponent,
    AppelProspectComponent,
    RdvProspectComponent,
    ConvertirProspectComponent,
    PageAdminComponent,
    HeaderAssistantComponent,
    HeaderCommerciauxComponent,
    HeaderFormateurComponent,
    HeaderParticipantComponent,
    AboutComponent,
    AddQuizComponent,
    AfficherQuizComponent,
    AddQuestionComponent,
    ListeQuizComponent,
    PasserQuizComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
