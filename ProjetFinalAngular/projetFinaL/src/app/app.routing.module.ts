import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { AddParticipantsComponent } from './add-participants/add-participants.component';

import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { FormationAssocieParticipantComponent } from './formation-associe-participant/formation-associe-participant.component';
import { ListeAdminsComponent } from './liste-admins/liste-admins.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ListeParticipantsComponent } from './liste-participants/liste-participants.component';
import { ModifAdminsComponent } from './modif-admins/modif-admins.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';
import { ModifParticipantsComponent } from './modif-participants/modif-participants.component';
import { PaiementAssocieParticipantComponent } from './paiement-associe-participant/paiement-associe-participant.component';
import { RelanceAssocieParticipantComponent } from './relance-associe-participant/relance-associe-participant.component';



const routes: Routes =[
  {path:'authentification',component:AuthComponent},
  {path:'', component:BodyComponent},
  {path:'afficherFormation', component:ListeFormationsComponent},
  {path:'modifierF/:idFormation', component:ModifFormationsComponent},
  {path: 'AjouterFormation', component:AddFormationsComponent},
  {path: 'afficherFormateurAssocie/:id', component:FormateurAssocieComponent},
  {path:'afficherAdmins', component:ListeAdminsComponent},
  {path:'modifierA/:idAdmin', component:ModifAdminsComponent},
  {path: 'AjouterAdmin', component:AddAdminsComponent},
  {path:'afficherParticipants', component:ListeParticipantsComponent},
  {path:'modifierP/:idParticipant', component:ModifParticipantsComponent},
  {path: 'AjouterParticipant', component:AddParticipantsComponent},
  {path: 'afficherFormationAssocieParticipant/:id', component:FormationAssocieParticipantComponent},
  {path: 'afficherRelanceAssocieParticipant/:id', component:RelanceAssocieParticipantComponent},
  {path: 'afficherPaiementAssocieParticipant/:id', component:PaiementAssocieParticipantComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }