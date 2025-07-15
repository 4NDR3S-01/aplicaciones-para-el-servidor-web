import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ParametrosIdealesService } from './parametros-ideales.service';
import { CreateParametrosIdealeDto } from './dto/create-parametros-ideale.dto';
import { UpdateParametrosIdealeDto } from './dto/update-parametros-ideale.dto';

@WebSocketGateway()
export class ParametrosIdealesGateway {
  constructor(private readonly parametrosIdealesService: ParametrosIdealesService) {}

  @SubscribeMessage('createParametrosIdeale')
  create(@MessageBody() createParametrosIdealeDto: CreateParametrosIdealeDto) {
    return this.parametrosIdealesService.create(createParametrosIdealeDto);
  }

  @SubscribeMessage('findAllParametrosIdeales')
  findAll() {
    return this.parametrosIdealesService.findAll();
  }

  @SubscribeMessage('findOneParametrosIdeale')
  findOne(@MessageBody() id: number) {
    return this.parametrosIdealesService.findOne(id);
  }

  @SubscribeMessage('updateParametrosIdeale')
  update(@MessageBody() updateParametrosIdealeDto: UpdateParametrosIdealeDto) {
    return this.parametrosIdealesService.update(updateParametrosIdealeDto.id, updateParametrosIdealeDto);
  }

  @SubscribeMessage('removeParametrosIdeale')
  remove(@MessageBody() id: number) {
    return this.parametrosIdealesService.remove(id);
  }
}
