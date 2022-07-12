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
  prospectsSansContact!: Prospect[]
  fileInput!: File
  myFiles: string[] = [];

  contact!: Contact

  utilisateur!: Utilisateur
  roles!: Role[]
  roleF = 0
  roleC = 0
  roleA = 0
  roleP = 0
  roleAdmin = 0


  @Output() newItemEvent = new EventEmitter<number>()

  constructor(private service: ProspectService, private serviceU: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.recupererRoles();


    this.contact = new Contact();

    if (this.roleAdmin = 1) {
      this.getAll();

    } else {
      this.getByIdCommercial();
    }

    this.getAllSansContact();
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

  getByIdCommercial() {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.service.getByIdCommercial(this.utilisateur.id).subscribe(
      response => this.prospects = response
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
