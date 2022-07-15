
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Choix } from '../models/Choix.model';
import { Question } from '../models/Question.model';
import { Quiz } from '../models/Quiz.model';
import { Resultat } from '../models/Resultat.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ChoixService } from '../service/choix.service';
import { MailService } from '../service/mail.service';
import { QuestionService } from '../service/question.service';
import { QuizService } from '../service/quiz.service';
import { ResultatService } from '../service/resultat.service';

@Component({
  selector: 'app-passer-quiz',
  templateUrl: './passer-quiz.component.html',
  styleUrls: ['./passer-quiz.component.css']
})
export class PasserQuizComponent implements OnInit {

  afficher = false;
  quiz!: Quiz;
  questions!: Question[];
  choix!: Choix[];
  resultat!: Resultat;
  utilisateur!: Utilisateur;

  score = 0;

  constructor(private route: ActivatedRoute, private serviceQuestion: QuestionService,
    private serviceC: ChoixService, private serviceQ: QuizService, private serviceR: ResultatService,
    private serviceM: MailService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.resultat = new Resultat();
    this.getAllQuestions();
    this.getAllChoix();
    this.getQuizById();
  }

  getQuizById() {
    const id = +this.route.snapshot.params['idQuiz'];
    this.serviceQ.getById(id).subscribe(
      response => {
        this.quiz = response
        console.log(this.quiz.idQuiz)
      }
    )

  }

  getAllQuestions() {
    const id = +this.route.snapshot.params['idQuiz'];
    this.serviceQuestion.getByIdQuiz(id).subscribe(
      response => this.questions = response
    )
  }
  getAllChoix() {
    this.serviceC.getAll().subscribe(
      response => this.choix = response
    )
  }

  correction(choix: Choix) {
    if (choix.reponse) {
      this.score++
      console.log(this.score)
    }
  }

  validerTest() {
    this.afficher = true;
    this.resultat.score = this.score;
    this.resultat.quiz = this.quiz;
    this.resultat.participant = this.utilisateur;


    if (this.quiz.scoreReussite < (this.score + 1)) {
      console.log("Felicitation")
      this.resultat.reussite = true

    } else {
      console.log("fail")
      this.resultat.reussite = false
    }
    this.serviceR.ajouterR(this.resultat).subscribe();
    this.serviceM.mailResultat(this.utilisateur.id, this.resultat).subscribe();

    this.router.navigateByUrl('passerQuiz/' + this.utilisateur.id);
  }



}
