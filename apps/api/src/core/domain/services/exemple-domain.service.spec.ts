import { Test, TestingModule } from '@nestjs/testing';
import { ExempleDomainService } from './exemple-domain.service';

describe('ExempleDomainService', () => {
  let service: ExempleDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExempleDomainService],
    }).compile();

    service = module.get<ExempleDomainService>(ExempleDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
