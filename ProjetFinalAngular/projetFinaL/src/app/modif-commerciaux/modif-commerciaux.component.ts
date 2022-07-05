import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { CommercialService } from '../service/commercial.service';

@Component({
  selector: 'app-modif-commerciaux',
  templateUrl: './modif-commerciaux.component.html',
  styleUrls: ['./modif-commerciaux.component.css']
})
export class ModifCommerciauxComponent implements OnInit {

  commercial!: Commercial

  constructor(private service: CommercialService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.commercial = new Commercial
    this.chargerCommercial()

  }
  //Methode chargerCommercial
  chargerCommercial() {
    const idF = +this.route.snapshot.params['idCommercial'];
    console.log(idF);
    this.service.getById(idF).subscribe(
      response => this.commercial = response
    )
  }

  //Methode modifier
  modif() {
    this.service.modifierC(this.commercial).subscribe(
      response => {

        this.chargerCommercial();

      }
    );
    this.router.navigateByUrl('afficherCommerciaux');
  }

//Methode afficherCommerciaux
afficherCommerciaux()
{
  this.router.navigateByUrl('afficherCommerciaux');
}

}
