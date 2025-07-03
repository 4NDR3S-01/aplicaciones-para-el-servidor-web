import { Test, TestingModule } from '@nestjs/testing';
import { TipoMetricaResolver } from './tipo-metrica.resolver';
import { TipoMetricaService } from './tipo-metrica.service';

describe('TipoMetricaResolver', () => {
  let resolver: TipoMetricaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMetricaResolver, TipoMetricaService],
    }).compile();

    resolver = module.get<TipoMetricaResolver>(TipoMetricaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
