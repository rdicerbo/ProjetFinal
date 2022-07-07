import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from '../models/Prospect.model';

@Component({
  selector: 'app-page-commerciale',
  templateUrl: './page-commerciale.component.html',
  styleUrls: ['./page-commerciale.component.css']
})
export class PageCommercialeComponent implements OnInit {

  prospects!: Prospect[]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Methode creer Prospect
  CreerProspect() {
    this.router.navigateByUrl('AjouterProspect');
  }


  //Methode creer Contact
  CreerContact() {
    this.router.navigateByUrl('AjouterContact');
  }


}
