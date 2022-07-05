
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { BasicAuthentificationService } from '../service/basic-authentification.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  username!: string;
  password!: string;
  errorMessage = "Error login and/or password";
  invalidLogin = false;
  utilisateur!: Utilisateur




  constructor(private router: Router,
    private bc: BasicAuthentificationService,
    private service: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();

  }


  //Methode authentification
  authentification() {
    console.log(this.username)
    console.log(this.password)
    this.bc.authentification(this.username, this.password)
      .subscribe(
        data => {
          sessionStorage.setItem('token', 'Bearer ' + data.jwt)
          this.router.navigateByUrl('afficherFormation');
          this.invalidLogin = false;
          this.service.getByUsername(this.username).subscribe(
            response => {
              this.utilisateur = response
              sessionStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));
              console.log(this.utilisateur.nom)
              console.log(this.utilisateur.prenom)
            }
          )

        },
        error => {
          console.log("error login and/or password");
          this.invalidLogin = true
        }
      )



  }

  //Methode createBasicHttpHeader()
  createBasicHttpHeader() {
    console.log(this.username);
    let basicchaine = 'Basic ' + window.btoa(this.username + ':' + this.password);
    return basicchaine;
  }






}


