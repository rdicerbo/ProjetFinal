import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAssistantComponent } from './add-assistant/add-assistant.component';


import { AddCommerciauxComponent } from './add-commerciaux/add-commerciaux.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddFormateursComponent } from './add-formateurs/add-formateurs.component';

import { AddFormationsComponent } from './add-formations/add-formations.component';
import { AddProspectComponent } from './add-prospect/add-prospect.component';

import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AddParticipantsComponent } from './add-participants/add-participants.component';


import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { ContactAssocieComponent } from './contact-associe/contact-associe.component';
import { ContactsAssociesComponent } from './contacts-associes/contacts-associes.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { ListeAssistantsComponent } from './liste-assistants/liste-assistants.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifAssistantsComponent } from './modif-assistants/modif-assistants.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';
import { ModifProspectsComponent } from './modif-prospects/modif-prospects.component';

import { FormationAssocieParticipantComponent } from './formation-associe-participant/formation-associe-participant.component';
import { ListeAdminsComponent } from './liste-admins/liste-admins.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';
import { ModifAdminsComponent } from './modif-admins/modif-admins.component';
import { ModifParticipantsComponent } from './modif-participants/modif-participants.component';
import { PaiementAssocieParticipantComponent } from './paiement-associe-participant/paiement-associe-participant.component';
import { RelanceAssocieParticipantComponent } from './relance-associe-participant/relance-associe-participant.component';
import { ListeProspectsComponent } from './liste-prospects/liste-prospects.component';
import { ModifCommerciauxComponent } from './modif-commerciaux/modif-commerciaux.component';
import { ListeCommerciauxComponent } from './liste-commerciaux/liste-commerciaux.component';
import { FormationAssocieeComponent } from './formation-associee/formation-associee.component';
import { ModifFormateursComponent } from './modif-formateurs/modif-formateurs.component';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { PagePersoComponent } from './page-perso/page-perso.component';
import { ModifPasswordComponent } from './modif-password/modif-password.component';
import { ParticipantAssocieFormationComponent } from './participant-associe-formation/participant-associe-formation.component';
import { PaiementAssociePFComponent } from './paiement-associe-pf/paiement-associe-pf.component';
import { RelanceAssociePFComponent } from './relance-associe-pf/relance-associe-pf.component';
import { RdvProspectComponent } from './rdv-prospect/rdv-prospect.component';
import { ConvertirProspectComponent } from './convertir-prospect/convertir-prospect.component';
import { AppelProspectComponent } from './appel-prospect/appel-prospect.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { HeaderComponent } from './header/header.component';
import { PageAssistantComponent } from './page-assistant/page-assistant.component';
import { PageCommercialeComponent } from './page-commerciale/page-commerciale.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { PageFormateurComponent } from './page-formateur/page-formateur.component';
import { PageParticipantComponent } from './page-participant/page-participant.component';




const routes: Routes = [
  { path: 'authentification', component: AuthComponent },
  { path: '', component: BodyComponent },
  { path: 'afficherFormation', component: ListeFormationsComponent },
  { path: 'espacePerso', component: PagePersoComponent },
  { path: 'modifPassword', component: ModifPasswordComponent },

  { path: 'modifierF/:idFormation', component: ModifFormationsComponent },
  { path: 'AjouterFormation', component: AddFormationsComponent },
  { path: 'afficherFormateurAssocie/:id', component: FormateurAssocieComponent },
  { path: 'afficherAssistants', component: ListeAssistantsComponent },
  { path: 'AjouterAssistant', component: AddAssistantComponent },
  { path: 'modifierAssistant/:idAssistant', component: ModifAssistantsComponent },


  { path: 'afficherFormateur', component: ListeFormateursComponent },
  { path: 'modifierFormateur/:idFormateur', component: ModifFormateursComponent },
  { path: 'AjouterFormateur', component: AddFormateursComponent },
  { path: 'afficherFormationAssociee/:id', component: FormationAssocieeComponent },


  { path: 'afficherCommerciaux', component: ListeCommerciauxComponent },
  { path: 'modifierCommercial/:idCommercial', component: ModifCommerciauxComponent },
  { path: 'afficherContactsAssocies/:idCommercial', component: ContactsAssociesComponent },
  { path: 'AjouterCommercial', component: AddCommerciauxComponent },
  { path: 'AjouterContact', component: AddContactComponent },


  { path: 'afficherProspects', component: ListeProspectsComponent },
  { path: 'AjouterProspect', component: AddProspectComponent },
  { path: 'modifierProspect/:idProspect', component: ModifProspectsComponent },
  { path: 'afficherContactAssocie/:idProspect', component: ContactAssocieComponent },

  { path: 'afficherAdmins', component: ListeAdminsComponent },
  { path: 'modifierA/:idAdmin', component: ModifAdminsComponent },
  { path: 'AjouterAdmin', component: AddAdminsComponent },
  { path: 'afficherParticipants', component: ListeParticipantsComponent },
  { path: 'modifierP/:idParticipant', component: ModifParticipantsComponent },
  { path: 'AjouterParticipant', component: AddParticipantsComponent },
  { path: 'afficherFormationAssocieParticipant/:id', component: FormationAssocieParticipantComponent },
  { path: 'afficherRelanceAssocieParticipant/:id', component: RelanceAssocieParticipantComponent },
  { path: 'afficherPaiementAssocieParticipant/:id', component: PaiementAssocieParticipantComponent },
  { path: 'participantAssocieForm/:id', component: ParticipantAssocieFormationComponent },


  { path: 'afficherRelanceAssocieParticipantEtFormation/:idFormation', component: RelanceAssociePFComponent },
  { path: 'afficherPaiementAssocieParticipantEtFormation/:idFormation', component: PaiementAssociePFComponent },

  { path: 'appelProspect/:idProspect', component: AppelProspectComponent },
  { path: 'rdvProspect/:idProspect', component: RdvProspectComponent },
  { path: 'convertirProspect', component: ConvertirProspectComponent },

  { path: 'pageAdmin', component: PageAdminComponent },
  { path: 'pageAssistant', component: PageAssistantComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'pageCommercial', component: PageCommercialeComponent },
  { path: 'listeContacts', component: ListeContactsComponent },
  { path: 'pageFormateur', component: PageFormateurComponent },
  { path: 'pageParticipant', component: PageParticipantComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }