import { Test, TestingModule } from '@nestjs/testing';
import { PracticasController } from './practicas.controller';
import { PracticasService } from './practicas.service';

describe('PracticasController', () => {
  let controller: PracticasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticasController],
      providers: [PracticasService],
    }).compile();

    controller = module.get<PracticasController>(PracticasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
