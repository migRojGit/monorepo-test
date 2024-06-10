import { Exemple } from "../../entities/exemple.class";

export interface ExempleRepository {
    save(exemple: Exemple): Promise<Exemple>
}