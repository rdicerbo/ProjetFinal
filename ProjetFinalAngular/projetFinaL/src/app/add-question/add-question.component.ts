import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../models/Question.model';
import { Quiz } from '../models/Quiz.model';
import { QuestionService } from '../service/question.service';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question!: Question
  quiz!: Quiz
  id!: number

  constructor(private service: QuestionService, private router: Router,
    private route: ActivatedRoute,
    private serviceQ: QuizService) { }

  ngOnInit(): void {
    this.quiz = new Quiz();
    this.question = new Question();
    this.id = +this.route.snapshot.params['idQuiz'];
    console.log(this.id)
    this.getQuizById();
    console.log(this.quiz.idQuiz)
  }

  getQuizById() {
    this.serviceQ.getById(this.id).subscribe(
      response => {
        this.quiz = response
        console.log(this.quiz.idQuiz)
      }
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
        this.service.ajouterQ(this.question).subscribe(
          response => {
            this.question = response
            this.router.navigateByUrl('ajouterQuiz')
          }
        )
      }
    )

  }

}
