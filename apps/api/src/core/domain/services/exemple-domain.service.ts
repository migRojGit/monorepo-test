import { Injectable } from '@nestjs/common';
import { ExempleService } from '../ports/inbound/exempleService.interface';
import { ExempleRepository } from '../ports/outbound/exempleRepository.interface';
import { Exemple } from '../entities/exemple.class';


export class ExempleDomainService implements ExempleService {
    constructor(
        private repository: ExempleRepository
    ) { }

    async save(exemple: Exemple): Promise<Exemple> {
        if(!this.validateExemple(exemple)) throw new Error('invalid exemple');
        return this.repository.save(exemple);
    }

    validateExemple(exemple: Exemple): boolean {
        return exemple.status ?? false
    }
}
