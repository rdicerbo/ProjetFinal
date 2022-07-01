import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationsComponent } from './add-formations/add-formations.component';

import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';



const routes: Routes =[
  {path:'authentification',component:AuthComponent},
  {path:'', component:BodyComponent},
  {path:'afficherFormation', component:ListeFormationsComponent},
  {path:'modifierF/:idFormation', component:ModifFormationsComponent},
  {path: 'AjouterFormation', component:AddFormationsComponent},
  {path: 'afficherFormateurAssocie/:id', component:FormateurAssocieComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }