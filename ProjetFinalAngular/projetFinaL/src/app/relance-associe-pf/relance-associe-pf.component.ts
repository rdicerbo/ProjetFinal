import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Relance } from '../models/Relance.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { RelanceService } from '../service/relance.service';

@Component({
  selector: 'app-relance-associe-pf',
  templateUrl: './relance-associe-pf.component.html',
  styleUrls: ['./relance-associe-pf.component.css']
})
export class RelanceAssociePFComponent implements OnInit {


  relances!: Relance[];
  utilisateur!: Utilisateur;

  constructor(private router: Router,
    private service: RelanceService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {

    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.afficher();
  }

  //Methode FormateurAssocie
  afficher() {
    const id = +this.route.snapshot.params['idFormation'];
    this.service.relancesByIdFormation(id, this.utilisateur).subscribe(
      response => {
        this.relances = response
      }
    )
  }


  Retour() {
    this.router.navigateByUrl('');
  }

}
