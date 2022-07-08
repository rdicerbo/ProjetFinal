import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';

@Component({
  selector: 'app-page-assistant',
  templateUrl: './page-assistant.component.html',
  styleUrls: ['./page-assistant.component.css']
})
export class PageAssistantComponent implements OnInit {

  utilisateur!: Utilisateur
  constructor(private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
  }


  GestionParticipants() {
    this.router.navigateByUrl('afficherParticipants');
  }

  GestionFormateurs() {
    this.router.navigateByUrl('afficherFormateur')
  }

  GestionFormations() {
    this.router.navigateByUrl('afficherFormation')
  }

}
