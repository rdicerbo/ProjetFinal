import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/Contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-associe',
  templateUrl: './contact-associe.component.html',
  styleUrls: ['./contact-associe.component.css']
})
export class ContactAssocieComponent implements OnInit {

  contact!: Contact
  constructor(private service: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getContact()
  }
  getContact() {
    const id = +this.route.snapshot.params['idProspect'];
    this.service.getByIdProspect(id).subscribe(
      response => {
        this.contact = response
      }
    )
  }
  // Bouton retour
  retour() {
    this.router.navigateByUrl('afficherProspects')
  }

}
