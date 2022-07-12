import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {

  contacts!: Contact[];
  utilisateur!: Utilisateur;

  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.getAllByIdComm();
  }

  getAllByIdComm() {
    this.service.getByIdCommercial(this.utilisateur.id).subscribe(
      response => {
        this.contacts = response
        console.log(this.utilisateur.id);
      }
    )
  }
}
