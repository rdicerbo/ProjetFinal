import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from '../models/Prospect.model';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-add-prospect',
  templateUrl: './add-prospect.component.html',
  styleUrls: ['./add-prospect.component.css']
})
export class AddProspectComponent implements OnInit {

  prospect!: Prospect

  constructor(private service: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.prospect = new Prospect
  }

  AjouterProspect() {
    this.service.ajouterP(this.prospect).subscribe(
      response => {
        this.router.navigateByUrl('afficherCommerciaux');
      }
    )
  }


  //Methode afficherCommerciaux
  afficherProspects()
 {
   this.router.navigateByUrl('afficherProspects');
 }

}
