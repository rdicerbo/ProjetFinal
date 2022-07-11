import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Participant } from '../models/Participant.model';
import { Prospect } from '../models/Prospect.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { ParticipantService } from '../service/participant.service';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-convertir-prospect',
  templateUrl: './convertir-prospect.component.html',
  styleUrls: ['./convertir-prospect.component.css']
})
export class ConvertirProspectComponent implements OnInit {

  prospects!: Prospect[];
  formations!: Formation[];
  participant!: Participant;
  selectedProspect!: Prospect;
  selectedFormation!: Formation;
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number


  constructor(private serviceP: ProspectService,
    private serviceF: ListeFormationsService,
    private servicePart: ParticipantService,
    private router: Router) { }

  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.getAllProspects();
    this.getAllForm();
    this.selectedFormation = new Formation();
    this.selectedProspect = new Prospect();
    this.participant = new Participant();

  }

  getAllProspects() {
    this.serviceP.getAll().subscribe(
      response => this.prospects = response
    )
  }

  getAllForm() {
    this.serviceF.getAll().subscribe(
      response => this.formations = response
    )
  }

  Convertir() {
    this.participant.mail = this.selectedProspect.emailProspect;
    this.participant.nom = this.selectedProspect.nomProspect;
    this.participant.prenom = this.selectedProspect.prenomProspect;
    this.servicePart.ajouterP(this.selectedFormation.idFormation, this.participant).subscribe(
      response => this.participant = response
    )

    // suppression du prospect
    this.serviceP.supprimer(this.selectedProspect.idProspect).subscribe()

    this.router.navigateByUrl('afficherParticipants')
  }

}
