import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../models/Formation.model';
import { Question } from '../models/Question.model';
import { Quiz } from '../models/Quiz.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ListeFormationsService } from '../service/liste-formations.service';
import { QuestionService } from '../service/question.service';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  utilisateur!: Utilisateur;
  formations!: Formation[];
  selectedFormation!: Formation;
  /*question!: Question;*/

  quiz!: Quiz;
  quizs!: Quiz[];
  constructor(private serviceF: ListeFormationsService, private serviceQ: QuizService,
    private serviceQuest: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
    this.quiz = new Quiz();
    /* this.question = new Question();*/

    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.getAllFormations();
    this.getAllQuiz();
  }

  getAllQuiz() {
    this.serviceQ.getAll().subscribe(
      response => this.quizs = response
    )
  }
  getAllFormations() {
    this.serviceF.getAll().subscribe(
      response => this.formations = response
    )
  }

  afficherQuiz(id: number, nbQuestion: number) {
    if (nbQuestion != 0) {
      this.router.navigateByUrl('afficherQuiz/' + id)
    }
    else {
      this.router.navigateByUrl('ajouterQuestion/' + id)
    }

  }

  AjouterQuiz() {
    this.quiz.formation = this.selectedFormation;
    this.quiz.formateur = this.utilisateur;
    this.serviceQ.ajouterQ(this.quiz).subscribe(
      response => {
        this.getAllQuiz()
        this.router.navigateByUrl('ajouterQuiz')
      }
    );


  }
}
