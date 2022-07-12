import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../models/Formateur.model';
import { Formation } from '../models/Formation.model';
import { FormateurService } from '../service/formateur.service';
import { ListeFormationsService } from '../service/liste-formations.service';
import { Role } from '../models/Role.model';
@Component({
  selector: 'app-modif-formations',
  templateUrl: './modif-formations.component.html',
  styleUrls: ['./modif-formations.component.css']
})
export class ModifFormationsComponent implements OnInit {

  formation!: Formation;

  formateurs!: Formateur[];

  selectedId!: number;
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number


  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private service: ListeFormationsService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceF: FormateurService) { }

  //Methode ngOnInit
  ngOnInit(): void {

    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.chargerFormations();
    this.chargerFormateur();
    this.selectedId = 0;
  }

  //Methode chargerFormations
  chargerFormations() {
    const idF = +this.route.snapshot.params['idFormation'];
    console.log(idF);
    this.service.getById(idF).subscribe(
      response => this.formation = response
    )
  }

  //Methode modifier
  modif() {
    this.service.modifierF(this.selectedId, this.formation).subscribe(
      response => {

        this.chargerFormations();

      }
    );
    this.router.navigateByUrl('afficherFormation');
  }

  //Methode chargerFormateur()
  chargerFormateur() {
    this.serviceF.getAll().subscribe(
      response => {
        this.formateurs = response;
      }
    )
  }

  //Methode afficherFormations
  afficherFormations() {
    this.router.navigateByUrl('afficherFormation');
  }


}
