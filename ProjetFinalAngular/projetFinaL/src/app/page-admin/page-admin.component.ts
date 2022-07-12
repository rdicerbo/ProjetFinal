import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Formation } from '../models/Formation.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {


  formations!: Formation[];

  formateur!: Formateur;



  filterTerm: string = '';
  selectedF!: string;
  formation!: Formation;

  selectedId!: number;

  selectedPrice!: number;

  utilisateur!: Utilisateur

  pdfselected!: File

  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private service: ListeFormationsService,
    private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void {
    //this.utilisateur = new Utilisateur
    this.chargerFormations();

    this.formation = new Formation;

    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    console.log(this.utilisateur.nom)
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

  Admin() {
    this.router.navigateByUrl('afficherAdmins');
  }

  Participant() {
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


  //Methode afficher2
  afficher2() {
    console.log(this.selectedF);
    this.service.getByName(this.selectedF).subscribe(
      response => {
        this.formation = response;
      }
    )
  }


  //Methode afficherById
  afficherById() {
    console.log(this.selectedId);
    this.service.getById(this.selectedId).subscribe(
      response => {
        this.formation = response;
      }
    )
  }


  //Methode afficherByPrice
  afficherByPrice() {
    console.log(this.selectedPrice);
    this.service.getByPrice(this.selectedPrice).subscribe(
      response => {
        this.formation = response;
      }
    )
  }

  //Methode afficherAssistants
  afficherAssistants() {
    this.router.navigateByUrl('afficherAssistants');
  }



  selectEvent(event: any): void {
    this.pdfselected = event.target.files[0];
  }

  savePdf(idFormation: number) {
    let formData = new FormData();
    formData.append('file', this.pdfselected)
    this.service.ajouterPdf(idFormation, formData).subscribe(
      response => this.chargerFormations()
    )
  }
  // Espace perso de l'utilisateur
  EspacePerso() {
    this.router.navigateByUrl('espacePerso');
  }

}
