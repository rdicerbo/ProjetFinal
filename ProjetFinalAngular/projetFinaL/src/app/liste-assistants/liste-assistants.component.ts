import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from '../models/Assistant.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeAssistantsService } from '../service/liste-assistants.service';

@Component({
  selector: 'app-liste-assistants',
  templateUrl: './liste-assistants.component.html',
  styleUrls: ['./liste-assistants.component.css']
})
export class ListeAssistantsComponent implements OnInit {

  assistants!: Assistant[];

  filterTerm: string='';
  selectedId!: number;
  assistant!: Assistant;

  selectedA!: string;


  constructor(private service: ListeAssistantsService,
    private router:Router) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.chargerAssistants();
    this.assistant=new Assistant;
   
  }

  //Methode chargerAssistants
  chargerAssistants()
  {
    this.service.getAll().subscribe(
      response=>{
        this.assistants=response;
      }
    )
  }

   //Methode supprimer
   supprimer(idAssistant:number)
   {
     this.service.supprimer(idAssistant).subscribe(
       response=>{
 
         this.chargerAssistants();
       }
     )
     this.router.navigateByUrl('afficherAssistants');
   }
 
//Methode AjouterAssistant
AjouterAssistant()
 {
   this.router.navigateByUrl('AjouterAssistant');
 }
  
//Methode modifier
modifier(idAssistant:number)
{
  this.router.navigateByUrl('modifierAssistant/'+idAssistant);
}

//Methode retour
retour()
{
  this.router.navigateByUrl('afficherFormation');
}

//Methode afficherById
afficherById()
{
  console.log(this.selectedId);
  this.service.getById(this.selectedId).subscribe(
    response =>
    {
      this.assistant=response;
      console.log(this.assistant.id);
    }
  )
}

//Methode afficher2
afficher2()
{
  console.log(this.selectedA);
  this.service.getByName(this.selectedA).subscribe(
    response =>
    {
      this.assistant=response;
    }
  )
}

 //Methode afficherFormations
 afficherFormations()
 {
   this.router.navigateByUrl('afficherFormation');
 }
 


}
