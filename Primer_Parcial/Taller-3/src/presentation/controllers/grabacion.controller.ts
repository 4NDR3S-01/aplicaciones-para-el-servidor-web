import { Request, Response } from 'express';
import { CreateGrabacionDto, UpdateGrabacionDto } from '../../domain/dtos/grabacion';
import { CreateGrabacion, DeleteGrabacion, GetGrabacion, GetGrabaciones, UpdateGrabacion } from '../../domain/use-cases/grabacion';

export class GrabacionController {
  constructor(
    private readonly createGrabacionUseCase: CreateGrabacion,
    private readonly getGrabacionesUseCase: GetGrabaciones,
    private readonly getGrabacionUseCase: GetGrabacion,
    private readonly updateGrabacionUseCase: UpdateGrabacion,
    private readonly deleteGrabacionUseCase: DeleteGrabacion,
  ) {}

  public createGrabacion = (req: Request, res: Response) => {
    const [error, createGrabacionDto] = CreateGrabacionDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.createGrabacionUseCase.execute(createGrabacionDto!)
      .then(grabacion => res.status(201).json(grabacion))
      .catch(error => res.status(400).json({ error }));
  };

  public getGrabaciones = (req: Request, res: Response) => {
    this.getGrabacionesUseCase.execute()
      .then(grabaciones => res.json(grabaciones))
      .catch(error => res.status(400).json({ error }));
  };

  public getGrabacionById = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'El argumento ID no es un número' });

    this.getGrabacionUseCase.execute(id)
      .then(grabacion => res.json(grabacion))
      .catch(error => res.status(400).json({ error }));
  };

  public updateGrabacion = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateGrabacionDto] = UpdateGrabacionDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });

    this.updateGrabacionUseCase.execute(updateGrabacionDto!)
      .then(grabacion => res.json(grabacion))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteGrabacion = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'El argumento ID no es un número' });

    this.deleteGrabacionUseCase.execute(id)
      .then(grabacion => res.json(grabacion))
      .catch(error => res.status(400).json({ error }));
  };
}
