import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from '../models/Commercial.model';
import { Contact } from '../models/Contact.model';
import { Prospect } from '../models/Prospect.model';
import { CommercialService } from '../service/commercial.service';
import { ContactService } from '../service/contact.service';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  commerciaux!: Commercial[]
  contact!: Contact
  prospects!: Prospect[]

  selectedP!: Prospect
  selectedC!: Commercial
  roleF !: number
  roleC !: number
  roleA !: number
  roleP !: number
  roleAdmin !: number

  constructor(private serviceComm: CommercialService, private serviceP: ProspectService,
    private service: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.roleF = JSON.parse(sessionStorage['roleF']);
    this.roleC = JSON.parse(sessionStorage['roleC']);
    this.roleA = JSON.parse(sessionStorage['roleA']);
    this.roleP = JSON.parse(sessionStorage['roleP']);
    this.roleAdmin = JSON.parse(sessionStorage['roleAdmin']);
    this.contact = new Contact
    this.selectedC = new Commercial
    this.selectedP = new Prospect
    this.getAllCommerciaux()
    this.getAllProspects()
  }

  getAllCommerciaux() {
    this.serviceComm.getAll().subscribe(
      response => {
        this.commerciaux = response
      }
    )
  }
  getAllProspects() {
    this.serviceP.getAllSansContact().subscribe(
      response => {
        this.prospects = response
      }
    )
  }

  AjouterContact() {
    this.contact.prospect = this.selectedP
    this.contact.commercial = this.selectedC
    this.service.ajouterC(this.contact).subscribe(
      response => {
        this.router.navigateByUrl('');
      }
    )
  }



  Retour() {
    this.router.navigateByUrl('');
  }

}
