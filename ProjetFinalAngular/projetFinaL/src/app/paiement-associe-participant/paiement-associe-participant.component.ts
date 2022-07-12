import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../models/Paiement.model';
import { Relance } from '../models/Relance.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { MailService } from '../service/mail.service';
import { PaiementService } from '../service/paiement.service';
import { RelanceService } from '../service/relance.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-paiement-associe-participant',
  templateUrl: './paiement-associe-participant.component.html',
  styleUrls: ['./paiement-associe-participant.component.css']
})
export class PaiementAssocieParticipantComponent implements OnInit {

  @Input() utilisateur !: Utilisateur;
  paiements!: Paiement[];
  id!: number;
  roles!: Role[]
  roleF = 0
  roleC = 0
  roleA = 0
  roleP = 0
  roleAdmin = 0

  relance!: Relance;

  testRelance!: number;

  constructor(private router: Router,
    private service: PaiementService,
    private serviceU: UtilisateurService,
    private serviceR: RelanceService,
    private route: ActivatedRoute,
    private serviceM: MailService) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.testRelance = 0;
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.relance = new Relance();
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

  //Methode Relance
  Relance() {

    this.relance.date = new Date();
    this.relance.participant = this.paiements[0].participant;
    this.relance.montant = this.paiements[this.paiements.length - 1].reste;
    this.relance.formationR = this.paiements[0].formation;
    this.relance.assistant = this.utilisateur;

    this.serviceR.insererR(this.relance).subscribe(
      response => {
        console.log("test");
        this.relance = response;
        this.serviceM.mailRelance(this.paiements[0].participant.id, this.relance).subscribe();
        this.testRelance = 1;
        this.afficher();


      }
    )

  }



  Retour() {
    this.router.navigateByUrl('afficherParticipants');
  }

}
