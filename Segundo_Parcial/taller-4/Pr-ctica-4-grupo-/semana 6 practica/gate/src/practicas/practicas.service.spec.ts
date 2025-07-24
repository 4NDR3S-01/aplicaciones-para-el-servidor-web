import { Test, TestingModule } from '@nestjs/testing';
import { PracticasService } from './practicas.service';

describe('PracticasService', () => {
  let service: PracticasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PracticasService],
    }).compile();

    service = module.get<PracticasService>(PracticasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
