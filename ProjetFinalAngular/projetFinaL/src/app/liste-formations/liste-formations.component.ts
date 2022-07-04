import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Formation } from '../models/Formation.model';
import { ListeFormationsService } from '../service/liste-formations.service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {

  formations!: Formation[];

  formateur!: Formateur;


  @Output() newItemEvent = new EventEmitter<number>();


  constructor(private service: ListeFormationsService,
    private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.chargerFormations();

  }


  //Methode chargerFormations
  chargerFormations() {
    this.service.getAll().subscribe(
      response => {
        this.formations = response;
      }
    )
  }


  //Methode supprimer
  supprimer(idFormation: number) {
    this.service.supprimer(idFormation).subscribe(
      response => {

        this.chargerFormations();
      }
    )
    this.router.navigateByUrl('afficherFormation');
  }


  //Methode modifier
  modifier(idFormation: number) {
    this.router.navigateByUrl('modifierF/' + idFormation);
  }


  //Methode AjouterFormation
  AjouterFormation() {
    this.router.navigateByUrl('AjouterFormation');
  }

  //Methode afficher
  afficher(id: number): void {
    this.router.navigateByUrl('afficherFormateurAssocie/' + id)
  }

Admin()
 {
   this.router.navigateByUrl('afficherAdmins');
 }

 Participant()
 {
   this.router.navigateByUrl('afficherParticipants');
 }

  GestionFormateurs() {
    this.router.navigateByUrl('afficherFormateur')
  }

  GestionsCommerciaux() {
    this.router.navigateByUrl('afficherCommerciaux')
  }

  GestionsProspects() {
    this.router.navigateByUrl('afficherProspects')
  }


}
