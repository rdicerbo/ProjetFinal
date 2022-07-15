import { Quiz } from "./Quiz.model";

export class Question {
    idQuestion!: number;
    explication!: string;
    libQuestion!: string;
    quiz!: Quiz;
}