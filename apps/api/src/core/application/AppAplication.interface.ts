import { NewExempleDTO } from "../shared/exempleDTO.interface";
/**
 *  definir esta interfaz como punto de entrada para poder usar el caso de uso es
 *  importante que sea una 
 *  interfaz también ya que facilita el reemplazo en las pruebas unitarias.
 */
export interface AppAplication {
    createExemple(newExemple: NewExempleDTO): Promise<number>;
}