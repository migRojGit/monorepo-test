import { Injectable } from '@nestjs/common';
import { AppAplication } from '../AppAplication.interface';
import { ExempleService } from 'src/core/domain/ports/inbound/exempleService.interface';
import { NewExempleDTO } from 'src/core/shared/exempleDTO.interface';
import { Exemple } from 'src/core/domain/entities/exemple.class';


export class ExempleApplicationService implements AppAplication{

    constructor(
        private exemple: ExempleService
    ) { }
    async createExemple(newExemple: NewExempleDTO): Promise<number> {
        const exemple: Exemple = {
            id: 0,
            name: newExemple.name,
            status: newExemple.status,
            description: newExemple.description
        }
        const entity = Exemple.create(exemple.name, exemple.description, exemple.status);
        const save = await this.exemple.save(entity);
        return save.id
    }
}
