import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { CommercialService } from '../service/commercial.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-modif-password',
  templateUrl: './modif-password.component.html',
  styleUrls: ['./modif-password.component.css']
})
export class ModifPasswordComponent implements OnInit {

  utilisateur!: Utilisateur

  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
  }

  modif() {
    // if(this.utilisateur.role === 2){
    this.service.modifierU(this.utilisateur).subscribe();
    //}
    sessionStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));
    this.router.navigateByUrl('espacePerso');
  }

//Methode afficherEspacePerso
afficherEspacePerso()
{
  this.router.navigateByUrl('espacePerso');
}


}
