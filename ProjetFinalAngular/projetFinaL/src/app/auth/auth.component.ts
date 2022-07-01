
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


username!:string;
password!:string;
errorMessage="Error login and/or password";
invalidLogin=false;





constructor(private router:Router,
  private bc:BasicAuthentificationService,
  private route:ActivatedRoute) 
  { }

ngOnInit():void
{


}


//Methode authentification
authentification()

{
  this.bc.authentification(this.username,this.password)
  .subscribe(
    data => {
      sessionStorage.setItem('token', 'Bearer ' +data.jwt)
      this.router.navigateByUrl('afficherFormation');
      this.invalidLogin=false;

    },
    error=>
    {
      console.log("error login and/or password");
      this.invalidLogin=true
    }
  )


  
}

//Methode createBasicHttpHeader()
createBasicHttpHeader()
{
  console.log(this.username);
  let basicchaine='Basic '+window.btoa(this.username+':'+this.password);
  return basicchaine;
}






}


