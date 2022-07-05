import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Participant } from '../models/Participant.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-add-participants',
  templateUrl: './add-participants.component.html',
  styleUrls: ['./add-participants.component.css']
})
export class AddParticipantsComponent implements OnInit {
 
  participant!: Participant;

  formations!: Formation[];

  selectedId!: number;

  constructor(private route: Router,
    private service: ParticipantService,
    private Fservice: ListeFormationsService) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.participant=new Participant;
    this.chargerFormation();
    this.selectedId=0;
  }

//AjouterFormation
AjouterParticipant()
  {
    this.service.ajouterP(this.selectedId,this.participant).subscribe(
      response=>{
        this.route.navigateByUrl('afficherParticipants');
      }
    )
  }

   //Methode chargerFormateur()
 chargerFormation()
 {
   this.Fservice.getAll().subscribe(
     response=>{
       this.formations=response;
     }
   )
 }

  //Methode afficherParticipants
  afficherParticipants()
  {
    this.route.navigateByUrl('afficherParticipants');
  }
}
