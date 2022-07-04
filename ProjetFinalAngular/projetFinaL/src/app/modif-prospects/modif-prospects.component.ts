import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from '../models/Prospect.model';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-modif-prospects',
  templateUrl: './modif-prospects.component.html',
  styleUrls: ['./modif-prospects.component.css']
})
export class ModifProspectsComponent implements OnInit {

  prospect!: Prospect
  constructor(private service: ProspectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prospect = new Prospect
    this.chargerProspect()
  }

  modif() {
    this.service.modifierP(this.prospect).subscribe(
      response => {

        this.chargerProspect();

      }
    );
    this.router.navigateByUrl('afficherProspects');
  }

  //Methode chargerProspect
  chargerProspect() {
    const idF = +this.route.snapshot.params['idProspect'];
    console.log(idF);
    this.service.getById(idF).subscribe(
      response => this.prospect = response
    )
  }
}
