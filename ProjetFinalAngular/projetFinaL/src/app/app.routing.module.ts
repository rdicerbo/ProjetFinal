import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';

import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { ListeAssistantsComponent } from './liste-assistants/liste-assistants.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifAssistantsComponent } from './modif-assistants/modif-assistants.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';



const routes: Routes =[
  {path:'authentification',component:AuthComponent},
  {path:'', component:BodyComponent},
  {path:'afficherFormation', component:ListeFormationsComponent},
  {path:'modifierF/:idFormation', component:ModifFormationsComponent},
  {path: 'AjouterFormation', component:AddFormationsComponent},
  {path: 'afficherFormateurAssocie/:id', component:FormateurAssocieComponent},
  {path: 'afficherAssistants', component:ListeAssistantsComponent},
  {path: 'AjouterAssistant', component:AddAssistantComponent},
  {path: 'modifierAssistant/:idAssistant', component:ModifAssistantsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }