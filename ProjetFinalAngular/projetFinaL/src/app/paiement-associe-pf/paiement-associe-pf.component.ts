import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../models/Paiement.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { PaiementService } from '../service/paiement.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-paiement-associe-pf',
  templateUrl: './paiement-associe-pf.component.html',
  styleUrls: ['./paiement-associe-pf.component.css']
})
export class PaiementAssociePFComponent implements OnInit {

  paiement!: Paiement;

  utilisateur!: Utilisateur;

  newPaiement!: Paiement;

  nouveaupaiement!: number;

  date1 = new Date();

  constructor(private router: Router,
    private service: PaiementService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.recupererPaiement();
    this.newPaiement = new Paiement();

  }

  //Methode paiement
  recupererPaiement() {
    const id = +this.route.snapshot.params['idFormation'];
    this.service.paiementByIdFormation(id, this.utilisateur).subscribe(
      response => {
        this.paiement = response;
      }
    )
  }

  //Methode Retour
  Retour() {
    this.router.navigateByUrl('');
  }

  //Methode Payer
  Payer() {
    this.newPaiement.date = new Date();
    this.newPaiement.reste = this.paiement.reste - this.nouveaupaiement;
    this.newPaiement.montant = this.nouveaupaiement;
    this.newPaiement.participant = this.paiement.participant;
    this.newPaiement.formation = this.paiement.formation;

    this.service.insererP(this.newPaiement).subscribe(
      response => {
        this.recupererPaiement;
        this.newPaiement = response;
        this.router.navigateByUrl('afficherPaiementAssocieParticipantEtFormation/' + this.newPaiement.formation.idFormation);
      }
    );

  }
}
