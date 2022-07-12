
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../models/Role.model';
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

  roles!: Role[]
  roleF = 0
  roleC = 0
  roleA = 0
  roleP = 0
  roleAdmin = 0



  constructor(private router: Router,
    private bc: BasicAuthentificationService,
    private service: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();

  }

  recupererRoles() {
    const id = this.utilisateur.id
    this.service.rolesByIdUser(id).subscribe(
      response => {
        this.roles = response
        //console.log(this.roles.length)
        for (let i = 0; i < this.roles.length; i++) {

          if (this.roles[i].idRole == 2) {
            this.roleC = 1

            let tampon = true;
            for (let i = 0; i < this.roles.length; i++) {
              if (this.roles[i].idRole == 1) {
                tampon = false;
              }
            }
            if (tampon) {
              this.router.navigateByUrl('pageCommercial');
            }

          }
          if (this.roles[i].idRole == 5) {
            this.roleF = 1

          }



          if (this.roles[i].idRole == 3) {
            this.roleA = 1

            let tampon = true;
            for (let i = 0; i < this.roles.length; i++) {
              if (this.roles[i].idRole == 1) {
                tampon = false;
              }
            }
            if (tampon) {
              this.router.navigateByUrl('pageAssistant');
            }
          }



          if (this.roles[i].idRole == 4) {
            this.roleP = 1

          }
          if (this.roles[i].idRole == 1) {
            this.roleAdmin = 1


            this.router.navigateByUrl('pageAdmin');

          }
        }

        sessionStorage.setItem('roleAdmin', JSON.stringify(this.roleAdmin));
        sessionStorage.setItem('roleP', JSON.stringify(this.roleP));
        sessionStorage.setItem('roleA', JSON.stringify(this.roleA));
        sessionStorage.setItem('roleF', JSON.stringify(this.roleF));
        sessionStorage.setItem('roleC', JSON.stringify(this.roleC));
      }
    )
  }

  //Methode authentification
  authentification() {
    console.log(this.username)
    console.log(this.password)
    this.bc.authentification(this.username, this.password)
      .subscribe(
        data => {
          console.log("message token")
          console.log(data.jwt)
          sessionStorage.setItem('token', 'Bearer ' + data.jwt)
          this.router.navigateByUrl('');
          this.invalidLogin = false;
          this.service.getByUsername(this.username).subscribe(
            response => {
              this.utilisateur = response
              sessionStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));
              console.log(this.utilisateur.nom)
              console.log(this.utilisateur.prenom)
              this.recupererRoles();
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


