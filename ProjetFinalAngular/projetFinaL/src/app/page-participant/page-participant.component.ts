import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';

@Component({
  selector: 'app-page-participant',
  templateUrl: './page-participant.component.html',
  styleUrls: ['./page-participant.component.css']
})
export class PageParticipantComponent implements OnInit {
  formationsFini!: Formation[];
  formationsAvenir!: Formation[];
  formationsEncours!: Formation[];
  formationsGratuites!: Formation[];
  utilisateur!: Utilisateur


  constructor(private service: ListeFormationsService,
    private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void {
    //this.utilisateur = new Utilisateur
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    console.log(this.utilisateur.nom)
    this.chargerFormationsFini();
    this.chargerFormationsAvenir();
    this.chargerFormationsEncours();
    this.chargerFormationsGratuites();
  }
  //Methode chargerFormations
  chargerFormationsFini() {
    this.service.getformationsArchivesByParticipant(this.utilisateur.id).subscribe(
      response => {
        this.formationsFini = response;
      }
    )
  }
  chargerFormationsAvenir() {
    this.service.getformationsAVenirByParticipant(this.utilisateur.id).subscribe(
      response => {
        this.formationsAvenir = response;
      }
    )
  }
  chargerFormationsEncours() {
    this.service.getformationsEnCoursByParticipant(this.utilisateur.id).subscribe(
      response => {
        this.formationsEncours = response;
      }
    )
  }

  chargerFormationsGratuites() {
    this.service.formationsGratuites().subscribe(
      response => {
        this.formationsGratuites = response;
      }
    )
  }



}
