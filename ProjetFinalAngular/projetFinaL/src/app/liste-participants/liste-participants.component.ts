import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../models/Participant.model';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-liste-participants',
  templateUrl: './liste-participants.component.html',
  styleUrls: ['./liste-participants.component.css']
})
export class ListeParticipantsComponent implements OnInit {

  participants!: Participant[];

  
  @Output() newItemEvent=new EventEmitter<number>();


  constructor(private service: ParticipantService,
    private router:Router) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.chargerParticipants();

  }


//Methode chargerParticipants
chargerParticipants()
{
  this.service.getAll().subscribe(
    response=>{
      this.participants=response;
    }
  )
}



  //Methode supprimer
  supprimer(idParticipant:number)
  {
    this.service.supprimer(idParticipant).subscribe(
      response=>{

        this.chargerParticipants();
      }
    )
    this.router.navigateByUrl('afficherParticipants');
  }

 
//Methode modifier
modifier(idParticipant:number)
{
  this.router.navigateByUrl('modifierP/'+idParticipant);
}


 //Methode AjouterParticipant
 AjouterParticipant()
 {
   this.router.navigateByUrl('AjouterParticipant');
 }


  //Methode FormationAssocie
  formationAssocie(idParticipant:number)
  {
    this.router.navigateByUrl('afficherFormationAssocieParticipant/'+idParticipant);
  }

  //Methode RelanceAssocie
  RelanceAssocie(idParticipant:number)
  {
    this.router.navigateByUrl('afficherRelanceAssocieParticipant/'+idParticipant);
  }

  //Methode PaiementAssocie
  PaiementAssocie(idParticipant:number)
  {
    this.router.navigateByUrl('afficherPaiementAssocieParticipant/'+idParticipant);
  }

  Retour()
  {
    this.router.navigateByUrl('afficherFormation');
  }




}
