import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/Admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.css']
})
export class AddAdminsComponent implements OnInit {
  
  admin!: Admin;

  constructor(private route: Router,
    private service: AdminService) { }

  //Methode ngOnInit
  ngOnInit(): void 
  {
    this.admin=new Admin;
  }

//AjouterFormation
AjouterAdmin()
  {
    this.service.ajouterA(this.admin).subscribe(
      response=>{
        this.route.navigateByUrl('afficherAdmins');
      }
    )
  }

}
