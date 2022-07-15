import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../models/Quiz.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-liste-quiz',
  templateUrl: './liste-quiz.component.html',
  styleUrls: ['./liste-quiz.component.css']
})
export class ListeQuizComponent implements OnInit {

  utilisateur!: Utilisateur;
  quizs!: Quiz[];
  constructor(private serviceQ: QuizService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.getAllQuiz();
  }

  getAllQuiz() {
    const id = +this.route.snapshot.params['idFormation'];
    this.serviceQ.getByIdFormation(id).subscribe(
      response => this.quizs = response
    )
  }


  passerQuiz(id: number) {
    this.router.navigateByUrl('passerQuiz/' + id)
  }

}
