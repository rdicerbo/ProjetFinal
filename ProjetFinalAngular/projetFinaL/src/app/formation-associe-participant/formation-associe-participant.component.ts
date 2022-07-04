import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Participant } from '../models/Participant.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-formation-associe-participant',
  templateUrl: './formation-associe-participant.component.html',
  styleUrls: ['./formation-associe-participant.component.css']
})
export class FormationAssocieParticipantComponent implements OnInit {

  formations!:Formation[];

  constructor(private router:Router,
    private service:ListeFormationsService,
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
    this.service.formationsByIdParticipant(id).subscribe(
      response =>
      {
        this.formations=response
      }
    )
  }
  

 Retour()
 {
   this.router.navigateByUrl('afficherParticipants');
 }


}
