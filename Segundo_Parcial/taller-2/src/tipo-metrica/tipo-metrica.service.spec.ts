import { Test, TestingModule } from '@nestjs/testing';
import { TipoMetricaService } from './tipo-metrica.service';

describe('TipoMetricaService', () => {
  let service: TipoMetricaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMetricaService],
    }).compile();

    service = module.get<TipoMetricaService>(TipoMetricaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
