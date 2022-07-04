import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommerciauxComponent } from './add-commerciaux/add-commerciaux.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddFormateursComponent } from './add-formateurs/add-formateurs.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { AddProspectComponent } from './add-prospect/add-prospect.component';

import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { ContactAssocieComponent } from './contact-associe/contact-associe.component';
import { ContactsAssociesComponent } from './contacts-associes/contacts-associes.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { FormationAssocieeComponent } from './formation-associee/formation-associee.component';
import { ListeCommerciauxComponent } from './liste-commerciaux/liste-commerciaux.component';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ListeProspectsComponent } from './liste-prospects/liste-prospects.component';
import { ModifCommerciauxComponent } from './modif-commerciaux/modif-commerciaux.component';
import { ModifFormateursComponent } from './modif-formateurs/modif-formateurs.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';
import { ModifProspectsComponent } from './modif-prospects/modif-prospects.component';



const routes: Routes = [
  { path: 'authentification', component: AuthComponent },
  { path: '', component: BodyComponent },
  { path: 'afficherFormation', component: ListeFormationsComponent },
  { path: 'modifierF/:idFormation', component: ModifFormationsComponent },
  { path: 'AjouterFormation', component: AddFormationsComponent },
  { path: 'afficherFormateurAssocie/:id', component: FormateurAssocieComponent },

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
  { path: 'afficherContactAssocie/:idProspect', component: ContactAssocieComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }