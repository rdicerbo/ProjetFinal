import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeAdminsComponent } from '../liste-admins/liste-admins.component';
import { Admin } from '../models/Admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-modif-admins',
  templateUrl: './modif-admins.component.html',
  styleUrls: ['./modif-admins.component.css']
})
export class ModifAdminsComponent implements OnInit {
  admin!: Admin;


  @Output() newItemEvent=new EventEmitter<number>();

  constructor(private service: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
     this.chargerAdmin();
  }

//Methode chargerFormations
chargerAdmin()
{
  const id=+this.route.snapshot.params['idAdmin'];
  this.service.getById(id).subscribe(
    response=>this.admin=response
  )
}

 //Methode modifier
 modif()
 {
   this.service.modifierA(this.admin).subscribe(
   );
   this.router.navigateByUrl('afficherAdmins');
 }

 //Methode afficherAdmins
 afficherAdmins()
{
  this.router.navigateByUrl('afficherAdmins');
}



}
