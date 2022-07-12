import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from '../models/Prospect.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-add-prospect',
  templateUrl: './add-prospect.component.html',
  styleUrls: ['./add-prospect.component.css']
})
export class AddProspectComponent implements OnInit {

  prospect!: Prospect
  fileInput!: File
  myFiles: string[] = [];
  prospects!: Prospect[]

  utilisateur!: Utilisateur
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  @Output() newItemEvent = new EventEmitter<number>()
  constructor(private service: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);

    this.prospect = new Prospect
  }

  AjouterProspect() {
    this.service.ajouterP(this.prospect).subscribe(
      response => {
        this.router.navigateByUrl('afficherProspects');
      }
    )
  }

  onFileChange(event: any) {

    for (var i = 0; i < event.target.files.length; i++) {

      this.myFiles.push(event.target.files[i]);

    }

  }

  getByIdCommercial() {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.service.getByIdCommercial(this.utilisateur.id).subscribe(
      response => this.prospects = response
    )
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


  //Methode afficherCommerciaux
  Retour() {
    this.router.navigateByUrl('');
  }

}
