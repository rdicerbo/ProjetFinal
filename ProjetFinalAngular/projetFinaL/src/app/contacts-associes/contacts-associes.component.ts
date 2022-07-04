import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/Contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contacts-associes',
  templateUrl: './contacts-associes.component.html',
  styleUrls: ['./contacts-associes.component.css']
})
export class ContactsAssociesComponent implements OnInit {

  contacts!: Contact[]
  constructor(private service: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllAss()
  }

  getAllAss() {
    const id = +this.route.snapshot.params['idCommercial'];
    this.service.getByIdCommercial(id).subscribe(
      response => {
        this.contacts = response
      }
    )
  }

  // Bouton retour
  retour() {
    this.router.navigateByUrl('afficherCommerciaux')
  }

}
