import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/Admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-liste-admins',
  templateUrl: './liste-admins.component.html',
  styleUrls: ['./liste-admins.component.css']
})
export class ListeAdminsComponent implements OnInit {

  admins!: Admin[];

  
  @Output() newItemEvent=new EventEmitter<number>();


  constructor(private service: AdminService,
    private router:Router) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.chargerAdmins();

  }


//Methode chargerFormations
chargerAdmins()
{
  this.service.getAll().subscribe(
    response=>{
      this.admins=response;
    }
  )
}


  //Methode supprimer
  supprimer(idAdmin:number)
  {
    this.service.supprimer(idAdmin).subscribe(
      response=>{

        this.chargerAdmins();
      }
    )
    this.router.navigateByUrl('afficherAdmins');
  }

 
//Methode modifier
modifier(idAdmin:number)
{
  this.router.navigateByUrl('modifierA/'+idAdmin);
}


 //Methode AjouterFormation
 AjouterAdmin()
 {
   this.router.navigateByUrl('AjouterAdmin');
 }

 
 Retour()
 {
   this.router.navigateByUrl('afficherFormation');
 }




}
