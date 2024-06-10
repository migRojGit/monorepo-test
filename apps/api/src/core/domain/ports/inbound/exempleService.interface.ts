import { Exemple } from "../../entities/exemple.class";

export interface ExempleService{
    save(exemple: Exemple): Promise<Exemple>;
    validateExemple(exemple: Exemple): boolean;
}