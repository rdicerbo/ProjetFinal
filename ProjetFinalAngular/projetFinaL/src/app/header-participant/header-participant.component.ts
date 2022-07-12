import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-participant',
  templateUrl: './header-participant.component.html',
  styleUrls: ['./header-participant.component.css']
})
export class HeaderParticipantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // Espace perso de l'utilisateur
  EspacePerso() {
    this.router.navigateByUrl('espacePerso');
  }



  //Methode deconnexion
  deconnexion() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("utilisateur");
    sessionStorage.removeItem("roleF");
    sessionStorage.removeItem("roleC");
    sessionStorage.removeItem("roleA");
    sessionStorage.removeItem("roleP");
    sessionStorage.removeItem("roleAdmin");
    sessionStorage.clear();
    this.router.navigateByUrl("authentification");
    console.log("ko");
  }

}