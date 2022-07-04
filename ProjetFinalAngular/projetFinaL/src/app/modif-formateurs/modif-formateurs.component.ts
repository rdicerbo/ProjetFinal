import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { FormateurService } from '../service/formateur.service';

@Component({
  selector: 'app-modif-formateurs',
  templateUrl: './modif-formateurs.component.html',
  styleUrls: ['./modif-formateurs.component.css']
})
export class ModifFormateursComponent implements OnInit {

  formateur!: Formateur

  constructor(private service: FormateurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formateur = new Formateur
    this.chargerFormateur();
  }

  //Methode chargerFormations
  chargerFormateur() {
    const idF = +this.route.snapshot.params['idFormateur'];
    console.log(idF);
    this.service.getById(idF).subscribe(
      response => this.formateur = response
    )
  }

  //Methode modifier
  modif() {
    this.service.modifierF(this.formateur).subscribe(
      response => {

        this.chargerFormateur();

      }
    );
    this.router.navigateByUrl('afficherFormateur');
  }

}
