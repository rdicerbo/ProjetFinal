import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Participant } from '../models/Participant.model';
import { Role } from '../models/Role.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-modif-participants',
  templateUrl: './modif-participants.component.html',
  styleUrls: ['./modif-participants.component.css']
})
export class ModifParticipantsComponent implements OnInit {
  participant!: Participant;
  formations!: Formation[];
  selectedId!: number;
  roles!: Role[]
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  @Output() newItemEvent=new EventEmitter<number>();

  constructor(private service: ParticipantService,
    private route: ActivatedRoute,
    private router: Router,
    private Fservice: ListeFormationsService) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
     this.chargerParticipant();
     this.chargerFormation();
     this.selectedId=0;
  }

//Methode chargerFormations
chargerParticipant()
{
  const id=+this.route.snapshot.params['idParticipant'];
  this.service.getById(id).subscribe(
    response=>this.participant=response
  )
}

 //Methode modifier
 modif()
 {
   this.service.modifierP(this.selectedId,this.participant).subscribe();
   this.router.navigateByUrl('afficherParticipants');
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
  this.router.navigateByUrl('afficherParticipants');
}

 
}
