import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { CommercialService } from '../service/commercial.service';

@Component({
  selector: 'app-liste-commerciaux',
  templateUrl: './liste-commerciaux.component.html',
  styleUrls: ['./liste-commerciaux.component.css']
})
export class ListeCommerciauxComponent implements OnInit {

  commerciaux!: Commercial[]

  constructor(private service: CommercialService, private router: Router) { }

  ngOnInit(): void {
    this.chargerCommerciaux()
  }

  chargerCommerciaux() {
    this.service.getAll().subscribe(
      response => {
        this.commerciaux = response;
      }
    )
  }

  //Methode supprimer
  supprimer(idCommercial: number) {
    this.service.supprimer(idCommercial).subscribe(
      response => {

        this.chargerCommerciaux();
      }
    )
    this.router.navigateByUrl('afficherCommerciaux');
  }


  //Methode modifier
  modifier(idCommercial: number) {
    this.router.navigateByUrl('modifierCommercial/' + idCommercial);
  }


  //Methode AjouterCommercial
  AjouterCommercial() {
    this.router.navigateByUrl('AjouterCommercial');
  }

  //Methode AfficherContacts
  afficher(idCommercial: number) {
    this.router.navigateByUrl('afficherContactsAssocies/' + idCommercial);
  }


  // Methode creer Prospect
  CreerProspect() {
    this.router.navigateByUrl('AjouterProspect');
  }

  // Bouton retour
  retour() {
    this.router.navigateByUrl('afficherFormation')
  }
}
