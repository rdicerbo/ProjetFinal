import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Relance } from '../models/Relance.model';
import { RelanceService } from '../service/relance.service';

@Component({
  selector: 'app-relance-associe-participant',
  templateUrl: './relance-associe-participant.component.html',
  styleUrls: ['./relance-associe-participant.component.css']
})
export class RelanceAssocieParticipantComponent implements OnInit {


  relances!:Relance[];

  constructor(private router:Router,
    private service:RelanceService,
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
    this.service.relancesByIdParticipant(id).subscribe(
      response =>
      {
        this.relances=response
      }
    )
  }

  
 Retour()
 {
   this.router.navigateByUrl('afficherParticipants');
 }
}
