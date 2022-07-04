import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assistant } from '../models/Assistant.model';
import { ListeAssistantsService } from '../service/liste-assistants.service';

@Component({
  selector: 'app-modif-assistants',
  templateUrl: './modif-assistants.component.html',
  styleUrls: ['./modif-assistants.component.css']
})
export class ModifAssistantsComponent implements OnInit {

  assistant!: Assistant;



  constructor(private service: ListeAssistantsService,
    private route: ActivatedRoute,
    private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.chargerAssistants();

  }

  //Methode modifier
 modif()
 {
   this.service.modifierA(this.assistant).subscribe(
     response=>{
  
      this.service.getAll();
       //this.chargerAssistants();
       
     }
   );
   this.router.navigateByUrl('afficherAssistants');
 }

//Methode chargerAssistants
chargerAssistants()
{
  const idA=+this.route.snapshot.params['idAssistant'];
  this.service.getById(idA).subscribe(
    response=>this.assistant=response
  )
}

//Methode afficherAssistants
afficherAssistants()
{
  this.router.navigateByUrl('afficherAssistants');
}


}
