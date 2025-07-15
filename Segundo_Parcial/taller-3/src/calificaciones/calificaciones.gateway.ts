import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacioneDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';

@WebSocketGateway()
export class CalificacionesGateway {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @SubscribeMessage('createCalificacione')
  create(@MessageBody() createCalificacioneDto: CreateCalificacioneDto) {
    return this.calificacionesService.create(createCalificacioneDto);
  }

  @SubscribeMessage('findAllCalificaciones')
  findAll() {
    return this.calificacionesService.findAll();
  }

  @SubscribeMessage('findOneCalificacione')
  findOne(@MessageBody() id: number) {
    return this.calificacionesService.findOne(id);
  }

  @SubscribeMessage('updateCalificacione')
  update(@MessageBody() updateCalificacioneDto: UpdateCalificacioneDto) {
    return this.calificacionesService.update(updateCalificacioneDto.id, updateCalificacioneDto);
  }

  @SubscribeMessage('removeCalificacione')
  remove(@MessageBody() id: number) {
    return this.calificacionesService.remove(id);
  }
}
