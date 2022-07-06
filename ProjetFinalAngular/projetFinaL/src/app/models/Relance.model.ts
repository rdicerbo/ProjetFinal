import { Assistant } from "./Assistant.model";
import { Formateur } from "./Formateur.model";
import { Formation } from "./Formation.model";
import { Participant } from "./Participant.model";


export class Relance
{

    idRelance!: number;
    participant!: Participant;
    date!: Date;
    montant!: number;

    formationR!: Formation;
    assistant!:Assistant;
}