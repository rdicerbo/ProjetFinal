import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';

@Component({
  selector: 'app-page-formateur',
  templateUrl: './page-formateur.component.html',
  styleUrls: ['./page-formateur.component.css']
})
export class PageFormateurComponent implements OnInit {

  formationsFini!: Formation[];
  formationsAvenir!: Formation[];
  formationsEncours!: Formation[];

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
  }
  //Methode chargerFormations
  chargerFormationsFini() {
    this.service.getformationsArchives(this.utilisateur.id).subscribe(
      response => {
        this.formationsFini = response;
      }
    )
  }
  chargerFormationsAvenir() {
    this.service.getformationsAVenir(this.utilisateur.id).subscribe(
      response => {
        this.formationsAvenir = response;
      }
    )
  }
  chargerFormationsEncours() {
    this.service.getformationsEnCours(this.utilisateur.id).subscribe(
      response => {
        this.formationsEncours = response;
      }
    )
  }



  afficher(id: number) {
    this.router.navigateByUrl('participantAssocieForm/'+id);
  }


}
