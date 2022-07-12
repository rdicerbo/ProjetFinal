import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { Prospect } from '../models/Prospect.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { CommercialService } from '../service/commercial.service';

@Component({
  selector: 'app-page-commerciale',
  templateUrl: './page-commerciale.component.html',
  styleUrls: ['./page-commerciale.component.css']
})
export class PageCommercialeComponent implements OnInit {

  //prospects!: Prospect[]
  //commerciaux!: Commercial[];
  //constructor(private router: Router, private service: CommercialService) { }

  /*ngOnInit(): void {
    //this.getAll();
  }*/

  /* Methode creer Prospect
  CreerProspect() {
    this.router.navigateByUrl('AjouterProspect');
  }


  //Methode creer Contact
  CreerContact() {
    this.router.navigateByUrl('AjouterContact');
  }

  getAll() {
    this.service.getAll().subscribe(
      response => this.commerciaux = response
    )
  }

  recupererApres(e: any) {
    if (e == 1)
      this.getAll();
  }*/


  utilisateur!: Utilisateur
  constructor(private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
  }



  GestionsProspects() {
    this.router.navigateByUrl('afficherProspects')
  }

  // Espace perso de l'utilisateur
  EspacePerso() {
    this.router.navigateByUrl('espacePerso');
  }

  //Methode creer Contact
  CreerContact() {
    this.router.navigateByUrl('AjouterContact');
  }

  //Methode creer Prospect
  CreerProspect() {
    this.router.navigateByUrl('AjouterProspect');
  }


}
