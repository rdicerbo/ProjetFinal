import { Participant } from "./Participant.model";
import { Quiz } from "./Quiz.model";

export class Resultat {
    idResultat!: number;
    score!: number;
    reussite!: boolean;
    quiz!: Quiz;
    participant!: Participant
}