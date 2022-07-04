import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { FormateurService } from '../service/formateur.service';

@Component({
  selector: 'app-add-formateurs',
  templateUrl: './add-formateurs.component.html',
  styleUrls: ['./add-formateurs.component.css']
})
export class AddFormateursComponent implements OnInit {

  formateur!: Formateur

  constructor(private service: FormateurService, private router: Router) { }

  ngOnInit(): void {
    this.formateur = new Formateur
  }
  //AjouterFormateur
  AjouterFormateur() {
    this.service.ajouterF(this.formateur).subscribe(
      response => {
        this.router.navigateByUrl('afficherFormateur');
      }
    )
  }
}
