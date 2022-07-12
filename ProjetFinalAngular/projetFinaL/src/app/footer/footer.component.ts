import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(
    private router: Router) { }

  //Methode ngOnInit
  ngOnInit(): void {

  }





  //Methode deconnexion
  deconnexion() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("utilisateur");
    sessionStorage.clear();
    this.router.navigateByUrl("authentification");
    console.log("ko");
  }

}
