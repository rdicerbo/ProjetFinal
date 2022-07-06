import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../models/Paiement.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { PaiementService } from '../service/paiement.service';

@Component({
  selector: 'app-paiement-associe-participant',
  templateUrl: './paiement-associe-participant.component.html',
  styleUrls: ['./paiement-associe-participant.component.css']
})
export class PaiementAssocieParticipantComponent implements OnInit {

  @Input() utilisateur !: Utilisateur;
  paiements!: Paiement[];
  id!: number;

  constructor(private router: Router,
    private service: PaiementService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.afficher();
  }

  //Methode FormateurAssocie
  afficher() {
    this.id = +this.route.snapshot.params['id'];
    if (isNaN(this.id)) {
      this.service.paiementsByIdParticipant(this.utilisateur.id).subscribe(
        response => {
          this.paiements = response
        }
      )
    } else {
      this.service.paiementsByIdParticipant(this.id).subscribe(
        response => {
          this.paiements = response
        }
      )
    }

  }


  Retour() {
    this.router.navigateByUrl('afficherParticipants');
  }

}
