import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { CriteriosEvaluacionService } from './criterios-evaluacion.service';
import { CreateCriteriosEvaluacionDto } from './dto/create-criterios-evaluacion.dto';
import { UpdateCriteriosEvaluacionDto } from './dto/update-criterios-evaluacion.dto';

@WebSocketGateway()
export class CriteriosEvaluacionGateway {
  constructor(private readonly criteriosEvaluacionService: CriteriosEvaluacionService) {}

  @SubscribeMessage('createCriteriosEvaluacion')
  create(@MessageBody() createCriteriosEvaluacionDto: CreateCriteriosEvaluacionDto) {
    return this.criteriosEvaluacionService.create(createCriteriosEvaluacionDto);
  }

  @SubscribeMessage('findAllCriteriosEvaluacion')
  findAll() {
    return this.criteriosEvaluacionService.findAll();
  }

  @SubscribeMessage('findOneCriteriosEvaluacion')
  findOne(@MessageBody() id: number) {
    return this.criteriosEvaluacionService.findOne(id);
  }

  @SubscribeMessage('updateCriteriosEvaluacion')
  update(@MessageBody() updateCriteriosEvaluacionDto: UpdateCriteriosEvaluacionDto) {
    return this.criteriosEvaluacionService.update(updateCriteriosEvaluacionDto.id, updateCriteriosEvaluacionDto);
  }

  @SubscribeMessage('removeCriteriosEvaluacion')
  remove(@MessageBody() id: number) {
    return this.criteriosEvaluacionService.remove(id);
  }
}
