import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../models/Paiement.model';
import { PaiementService } from '../service/paiement.service';

@Component({
  selector: 'app-paiement-associe-participant',
  templateUrl: './paiement-associe-participant.component.html',
  styleUrls: ['./paiement-associe-participant.component.css']
})
export class PaiementAssocieParticipantComponent implements OnInit {


  paiements!:Paiement[];

  constructor(private router:Router,
    private service:PaiementService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.afficher();
  }

  //Methode FormateurAssocie
  afficher()
  {
    const id=+this.route.snapshot.params['id'];
    this.service.paiementsByIdParticipant(id).subscribe(
      response =>
      {
        this.paiements=response
      }
    )
  }

  
 Retour()
 {
   this.router.navigateByUrl('afficherParticipants');
 }

}
