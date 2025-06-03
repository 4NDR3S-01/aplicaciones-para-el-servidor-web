import { Request, Response } from 'express';
import { CreateTipoMetricaDto, UpdateTipoMetricaDto } from '../../domain/dtos/tipo-metrica';
import { CreateTipoMetrica, DeleteTipoMetrica, GetTipoMetrica, GetTipoMetricas, UpdateTipoMetrica } from '../../domain/use-cases/tipo-metrica';

export class TipoMetricaController {
  constructor(
    private readonly createTipoMetricaUseCase: CreateTipoMetrica,
    private readonly getTipoMetricasUseCase: GetTipoMetricas,
    private readonly getTipoMetricaUseCase: GetTipoMetrica,
    private readonly updateTipoMetricaUseCase: UpdateTipoMetrica,
    private readonly deleteTipoMetricaUseCase: DeleteTipoMetrica,
  ) {}

  public createTipoMetrica = (req: Request, res: Response) => {
    const [error, createTipoMetricaDto] = CreateTipoMetricaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.createTipoMetricaUseCase.execute(createTipoMetricaDto!)
      .then(tipoMetrica => res.status(201).json(tipoMetrica))
      .catch(error => res.status(400).json({ error }));
  };

  public getTipoMetricas = (req: Request, res: Response) => {
    this.getTipoMetricasUseCase.execute()
      .then(tipoMetricas => res.json(tipoMetricas))
      .catch(error => res.status(400).json({ error }));
  };

  public getTipoMetricaById = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'El argumento ID no es un número' });

    this.getTipoMetricaUseCase.execute(id)
      .then(tipoMetrica => res.json(tipoMetrica))
      .catch(error => res.status(400).json({ error }));
  };

  public updateTipoMetrica = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTipoMetricaDto] = UpdateTipoMetricaDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });

    this.updateTipoMetricaUseCase.execute(updateTipoMetricaDto!)
      .then(tipoMetrica => res.json(tipoMetrica))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteTipoMetrica = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'El argumento ID no es un número' });

    this.deleteTipoMetricaUseCase.execute(id)
      .then(result => res.json(result))
      .catch(error => res.status(400).json({ error }));
  };
}
