import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from '../models/Assistant.model';
import { ListeAssistantsService } from '../service/liste-assistants.service';

@Component({
  selector: 'app-add-assistant',
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.css']
})
export class AddAssistantComponent implements OnInit {

  
  assistant!: Assistant;

  constructor(private service: ListeAssistantsService,
    private route: Router) { }

//Methode ngOnInit
ngOnInit(): void 
{
  this.assistant=new Assistant;
}


//AjouterAssistant
AjouterAssistant()
{
  this.service.ajouterA(this.assistant).subscribe(
    response=>{
      this.route.navigateByUrl('afficherAssistants');
    }
  )
}

 //Methode afficherAssistants
 afficherAssistants()
 {
   this.route.navigateByUrl('afficherAssistants');
 }

}
