import { Commercial } from "./Commercial.model"
import { Prospect } from "./Prospect.model"

export class Contact {

    idContact!: number
    commercial!: Commercial
    prospect!: Prospect

    commentaire!: string
    date!: Date
    appOuRdv!: boolean
}