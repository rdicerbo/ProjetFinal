import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/Contact.model';
import { Prospect } from '../models/Prospect.model';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-liste-prospects',
  templateUrl: './liste-prospects.component.html',
  styleUrls: ['./liste-prospects.component.css']
})
export class ListeProspectsComponent implements OnInit {

  prospects!: Prospect[]
  fileInput!: File
  myFiles: string[] = [];

  contact!: Contact

  constructor(private service: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(
      response => this.prospects = response
    )
  }


  AjouterProspect() {
    this.router.navigateByUrl('AjouterProspect')
  }

  supprimer(id: number) {
    this.service.supprimer(id).subscribe(
      response => {
        this.getAll()
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

      })

  }

  appeler(id: number) {
    this.router.navigateByUrl('appelProspect/' + id);
  }

  rdv(id: number) {
    this.router.navigateByUrl('rdvProspect/' + id);
  }

}
