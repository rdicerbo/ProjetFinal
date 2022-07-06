import { Formation } from "./Formation.model";
import { Participant } from "./Participant.model";


export class Paiement
{

    idPaiement!: number;
    date!: Date;
    reste!: number;
    montant!: number;

    participant!: Participant;
    formation!: Formation;

}