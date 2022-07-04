import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { CommercialService } from '../service/commercial.service';

@Component({
  selector: 'app-add-commerciaux',
  templateUrl: './add-commerciaux.component.html',
  styleUrls: ['./add-commerciaux.component.css']
})
export class AddCommerciauxComponent implements OnInit {

  commercial!: Commercial

  constructor(private service: CommercialService, private router: Router) { }

  ngOnInit(): void {
    this.commercial = new Commercial
  }

  //AjouterCommercial
  AjouterCommercial() {
    this.service.ajouterC(this.commercial).subscribe(
      response => {
        this.router.navigateByUrl('afficherCommerciaux');
      }
    )
  }

}
