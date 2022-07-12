import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-assistant',
  templateUrl: './header-assistant.component.html',
  styleUrls: ['./header-assistant.component.css']
})
export class HeaderAssistantComponent implements OnInit {

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
