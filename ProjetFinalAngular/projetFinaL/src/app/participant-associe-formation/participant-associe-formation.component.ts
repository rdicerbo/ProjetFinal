import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../models/Participant.model';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-participant-associe-formation',
  templateUrl: './participant-associe-formation.component.html',
  styleUrls: ['./participant-associe-formation.component.css']
})
export class ParticipantAssocieFormationComponent implements OnInit {



  participants!: Participant[];

  constructor(private router: Router,
    private service: ParticipantService,
    private route: ActivatedRoute) { }

  //Methode ngOnInit
  ngOnInit(): void {
    this.afficher();
  }

  //Methode FormateurAssocie
  afficher() {
    const id = +this.route.snapshot.params['id'];
    this.service.participantsByIdFormation(id).subscribe(
      response => {
        this.participants = response
      }
    )
  }

}
