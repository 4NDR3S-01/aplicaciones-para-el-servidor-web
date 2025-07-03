import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TipoMetricaService } from './tipo-metrica.service';
import { TipoMetrica } from './entities/tipo-metrica.entity';
import { CreateTipoMetricaInput } from './dto/create-tipo-metrica.input';
import { UpdateTipoMetricaInput } from './dto/update-tipo-metrica.input';

@Resolver(() => TipoMetrica)
export class TipoMetricaResolver {
  constructor(private readonly tipoMetricaService: TipoMetricaService) {}

  @Mutation(() => TipoMetrica)
  createTipoMetrica(@Args('createTipoMetricaInput') createTipoMetricaInput: CreateTipoMetricaInput) {
    return this.tipoMetricaService.create(createTipoMetricaInput);
  }

  @Query(() => [TipoMetrica], { name: 'tipoMetrica' })
  findAll() {
    return this.tipoMetricaService.findAll();
  }

  @Query(() => TipoMetrica, { name: 'tipoMetrica' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tipoMetricaService.findOne(id);
  }

  @Mutation(() => TipoMetrica)
  updateTipoMetrica(@Args('updateTipoMetricaInput') updateTipoMetricaInput: UpdateTipoMetricaInput) {
    return this.tipoMetricaService.update(updateTipoMetricaInput.id, updateTipoMetricaInput);
  }

  @Mutation(() => TipoMetrica)
  removeTipoMetrica(@Args('id', { type: () => Int }) id: number) {
    return this.tipoMetricaService.remove(id);
  }
}
