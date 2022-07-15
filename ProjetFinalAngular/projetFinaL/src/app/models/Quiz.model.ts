import { Formateur } from "./Formateur.model";
import { Formation } from "./Formation.model";

export class Quiz {
    idQuiz!: number;
    nom!: string;
    nbQuestion!: number;
    scoreReussite!: number;

    formateur!: Formateur;
    formation!: Formation;
}