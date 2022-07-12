import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/Contact.model';
import { Prospect } from '../models/Prospect.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ContactService } from '../service/contact.service';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-rdv-prospect',
  templateUrl: './rdv-prospect.component.html',
  styleUrls: ['./rdv-prospect.component.css']
})
export class RdvProspectComponent implements OnInit {

  utilisateur!: Utilisateur;
  prospect!: Prospect;
  contact!: Contact;

  constructor(private route: ActivatedRoute, private serviceP: ProspectService, private serviceC: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.selectById();
  }
  selectById() {
    const id = +this.route.snapshot.params['idProspect'];
    this.serviceP.getById(id).subscribe(
      response => this.prospect = response
    )
  }

  RdvContact() {
    this.contact.appOuRdv = false;
    this.contact.prospect = this.prospect;
    this.contact.commercial = this.utilisateur;
    this.serviceC.ajouterC(this.contact).subscribe(
      response => this.contact = response
    )
    this.router.navigateByUrl('')
  }
  Retour() {
    this.router.navigateByUrl('');
  }
}
