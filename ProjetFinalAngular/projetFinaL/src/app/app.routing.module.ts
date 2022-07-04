import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormateursComponent } from './add-formateurs/add-formateurs.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';

import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { FormationAssocieeComponent } from './formation-associee/formation-associee.component';
import { ListeCommerciauxComponent } from './liste-commerciaux/liste-commerciaux.component';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifFormateursComponent } from './modif-formateurs/modif-formateurs.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';



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


  { path: 'afficherCommerciaux', component: ListeCommerciauxComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }