import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/Contact.model';
import { Prospect } from '../models/Prospect.model';
import { Role } from '../models/Role.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ProspectService } from '../service/prospect.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-liste-prospects',
  templateUrl: './liste-prospects.component.html',
  styleUrls: ['./liste-prospects.component.css']
})
export class ListeProspectsComponent implements OnInit {

  prospects!: Prospect[]
  prospectsCommercial!: Prospect[]
  prospectsSansContact!: Prospect[]

  fileInput!: File
  myFiles: string[] = [];

  contact!: Contact

  utilisateur!: Utilisateur
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number



  @Output() newItemEvent = new EventEmitter<number>()

  constructor(private service: ProspectService, private serviceU: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);


    this.contact = new Contact();

    this.getAll();
    this.getByIdCommercial();
    this.getAllSansContact();
  }






  getByIdCommercial() {
    this.service.getByIdCommercial(this.utilisateur.id).subscribe(
      response => this.prospectsCommercial = response

    )
  }

  getAll() {
    this.service.getAll().subscribe(
      response => this.prospects = response
    )
  }

  getAllSansContact() {
    this.service.getAllSansContact().subscribe(
      response => this.prospectsSansContact = response
    )
  }

  AjouterProspect() {
    this.router.navigateByUrl('AjouterProspect')
  }

  supprimer(id: number) {
    this.service.supprimer(id).subscribe(
      response => {
        this.getByIdCommercial()
      }
    )
    this.router.navigateByUrl('afficherProspects');
  }



  modifier(id: number) {
    this.router.navigateByUrl('modifierProspect/' + id);
  }
  afficher(id: number) {
    this.router.navigateByUrl('afficherContactAssocie/' + id);
  }

  /*retour() {
    this.router.navigateByUrl('afficherFormation')
  }*/


  onFileChange(event: any) {

    for (var i = 0; i < event.target.files.length; i++) {

      this.myFiles.push(event.target.files[i]);

    }

  }

  importerCsv() {

    const formData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {

      formData.append("file", this.myFiles[i]);

    }

    this.service.importerCsv(formData)

      .subscribe(res => {

        console.log(res);

        alert('Uploaded Successfully.');
        this.newItemEvent.emit(1);
        this.getByIdCommercial()
        this.router.navigateByUrl('afficherProspects');
      })

  }

  appeler(id: number) {
    this.router.navigateByUrl('appelProspect/' + id);
  }

  rdv(id: number) {
    this.router.navigateByUrl('rdvProspect/' + id);
  }

}
