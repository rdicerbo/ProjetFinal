import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../models/Paiement.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { PaiementService } from '../service/paiement.service';
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

  constructor(private router: Router,
    private service: PaiementService,
    private serviceU: UtilisateurService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.afficher();
    this.recupererRoles();
  }


  recupererRoles() {
    const id = this.utilisateur.id
    this.serviceU.rolesByIdUser(id).subscribe(
      response => {
        this.roles = response
        //console.log(this.roles.length)
        for (let i = 0; i < 5; i++) {

          if (this.roles[i].idRole == 2) {
            this.roleC = 1
          }
          if (this.roles[i].idRole == 5) {
            this.roleF = 1
          }
          if (this.roles[i].idRole == 3) {
            this.roleA = 1
          }
          if (this.roles[i].idRole == 4) {
            this.roleP = 1
          }
          if (this.roles[i].idRole == 1) {
            this.roleAdmin = 1

          }
        }
      }
    )
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

  Relance() {

  }

  Retour() {
    this.router.navigateByUrl('afficherParticipants');
  }

}
