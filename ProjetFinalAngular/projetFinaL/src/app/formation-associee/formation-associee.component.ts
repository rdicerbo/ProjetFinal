import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';

@Component({
  selector: 'app-formation-associee',
  templateUrl: './formation-associee.component.html',
  styleUrls: ['./formation-associee.component.css']
})
export class FormationAssocieeComponent implements OnInit {

  formations!: Formation[]

  constructor(private service: ListeFormationsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    this.FormationAssociee();
  }

  //Methode FormationAssociee
  FormationAssociee() {

    const id = +this.route.snapshot.params['id'];
    this.service.getByIdFormateur(id).subscribe(
      response => {
        this.formations = response
      }
    )
  }

  // Bouton retour
  retour() {
    this.router.navigateByUrl('afficherFormateur')
  }

}
