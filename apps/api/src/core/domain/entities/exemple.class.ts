export class Exemple {
    id          : number
    name        : string
    description : string
    status      : boolean

    static create(name: string, description: string, status: boolean = false): Exemple {
        const exemple = new Exemple()
        exemple.name = name
        exemple.description = description
        exemple.status = status
        return exemple
    }
}