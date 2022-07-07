import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from '../models/Prospect.model';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-liste-prospects',
  templateUrl: './liste-prospects.component.html',
  styleUrls: ['./liste-prospects.component.css']
})
export class ListeProspectsComponent implements OnInit {

  prospects!: Prospect[]

  constructor(private service: ProspectService, private router: Router) { }

  ngOnInit(): void {
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
}
