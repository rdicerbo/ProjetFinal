import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/Contact.model';
import { Prospect } from '../models/Prospect.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ProspectService } from '../service/prospect.service';

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

  @Output() newItemEvent = new EventEmitter<number>()

  constructor(private service: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.getByIdCommercial();
    this.getAllSansContact();
  }

  getByIdCommercial() {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.service.getByIdCommercial(this.utilisateur.id).subscribe(
      response => this.prospects = response
    )
  }

  getAllSansContact() {
    this.service.getAllSansContact().subscribe(
      response => this.prospectsSansContact = response
    )
  }

  AjouterProspect() {
    this.router.navigateByUrl('')
  }

  supprimer(id: number) {
    this.service.supprimer(id).subscribe(
      response => {
        this.getByIdCommercial()
      }
    )
    this.router.navigateByUrl('');
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
        this.router.navigateByUrl('');
      })

  }

  appeler(id: number) {
    this.router.navigateByUrl('appelProspect/' + id);
  }

  rdv(id: number) {
    this.router.navigateByUrl('rdvProspect/' + id);
  }

}
