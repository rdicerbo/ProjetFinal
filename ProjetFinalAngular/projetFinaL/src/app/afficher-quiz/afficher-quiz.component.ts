import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Choix } from '../models/Choix.model';
import { Question } from '../models/Question.model';
import { Quiz } from '../models/Quiz.model';
import { ChoixService } from '../service/choix.service';
import { QuestionService } from '../service/question.service';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-afficher-quiz',
  templateUrl: './afficher-quiz.component.html',
  styleUrls: ['./afficher-quiz.component.css']
})
export class AfficherQuizComponent implements OnInit {

  quiz!: Quiz;
  question!: Question;
  questions!: Question[];
  choix!: Choix[];
  id!: number;
  selectedChoix!: Choix;
  selectedquestion!: Question;

  SuppQuest!: Question;
  Suppselectedquestion!: Question;
  SuppChoix!: Choix;
  ChoixByQuestion!: Choix[]

  constructor(private serviceQ: QuizService, private route: ActivatedRoute,
    private serviceQuestion: QuestionService,
    private serviceC: ChoixService,
    private router: Router) { }

  ngOnInit(): void {
    this.question = new Question();
    this.selectedChoix = new Choix();
    this.selectedquestion = new Question();

    this.SuppChoix = new Choix();
    this.Suppselectedquestion = new Question();
    this.SuppQuest = new Question();

    this.id = +this.route.snapshot.params['idQuiz'];
    console.log(this.id)
    this.getQuizById();
    this.getAllQuestions();
    this.getAllChoix();
    this.getChoixByIdQuestion();

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

  getQuizById() {
    this.serviceQ.getById(this.id).subscribe(
      response => {
        this.quiz = response
        console.log(this.quiz.idQuiz)
      }
    )

  }

  getChoixByIdQuestion() {
    this.serviceC.getByIdQuestion(this.Suppselectedquestion.idQuestion).subscribe(
      response => this.ChoixByQuestion = response
    )
  }
  AjouterQuestion() {
    this.serviceQ.getById(this.id).subscribe(
      response => {
        this.quiz = response
        console.log(this.quiz.idQuiz)
        this.quiz.nbQuestion++
        this.serviceQ.modifierQ(this.quiz).subscribe()
        this.question.quiz = this.quiz;
        this.serviceQuestion.ajouterQ(this.question).subscribe(
          response => {
            this.question = response
            this.router.navigateByUrl('afficherQuiz/' + this.id)
          }
        )
      }
    )

  }

  AjouterChoix() {

    this.selectedChoix.question = this.selectedquestion;
    this.serviceC.ajouterC(this.selectedChoix).subscribe(
      response => {
        this.selectedChoix = response
        this.router.navigateByUrl('afficherQuiz/' + this.id)
      }
    )

  }

  supprimerQuestion(id: number) {
    this.serviceQuestion.supprimer(id).subscribe(
      response => {
        this.getAllQuestions();
      }
    )
  }

  supprimerChoix(id: number) {
    this.serviceC.supprimer(id).subscribe(
      response => {
        this.getAllChoix();
      }
    )
  }


}
