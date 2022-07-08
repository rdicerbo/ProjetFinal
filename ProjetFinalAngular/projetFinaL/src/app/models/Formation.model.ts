import { Formateur } from "./Formateur.model";


export class Formation {

    idFormation!: number;
    libForm!: string;
    description!: string;
    dateDebut!: Date;
    dateFin!: Date;
    prix!: number;
    pdf!: string;

    formateur!: Formateur;

}