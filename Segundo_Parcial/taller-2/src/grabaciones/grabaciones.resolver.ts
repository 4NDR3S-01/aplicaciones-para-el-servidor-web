import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GrabacionesService } from './grabaciones.service';
import { Grabacione } from './entities/grabacione.entity';
import { CreateGrabacioneInput } from './dto/create-grabacione.input';
import { UpdateGrabacioneInput } from './dto/update-grabacione.input';

@Resolver(() => Grabacione)
export class GrabacionesResolver {
  constructor(private readonly grabacionesService: GrabacionesService) {}

  @Mutation(() => Grabacione)
  createGrabacione(@Args('createGrabacioneInput') createGrabacioneInput: CreateGrabacioneInput) {
    return this.grabacionesService.create(createGrabacioneInput);
  }

  @Query(() => [Grabacione], { name: 'grabaciones' })
  findAll() {
    return this.grabacionesService.findAll();
  }

  @Query(() => Grabacione, { name: 'grabacione' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.grabacionesService.findOne(id);
  }

  @Mutation(() => Grabacione)
  updateGrabacione(@Args('updateGrabacioneInput') updateGrabacioneInput: UpdateGrabacioneInput) {
    return this.grabacionesService.update(updateGrabacioneInput.id, updateGrabacioneInput);
  }

  @Mutation(() => Grabacione)
  removeGrabacione(@Args('id', { type: () => Int }) id: number) {
    return this.grabacionesService.remove(id);
  }
}
