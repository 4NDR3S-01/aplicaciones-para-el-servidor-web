export class ParametroIdealEntity {
  constructor(
    public id: number,
    public metricaId: number,
    public valorIdeal: number,
    public toleranciaMinima: number,
    public toleranciaMaxima: number,
    public descripcion?: string,
    public activo: boolean = true,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}

  get isActive(): boolean {
    return this.activo;
  }

  public isValueWithinTolerance(value: number): boolean {
    const minAcceptable = this.valorIdeal - this.toleranciaMinima;
    const maxAcceptable = this.valorIdeal + this.toleranciaMaxima;
    return value >= minAcceptable && value <= maxAcceptable;
  }

  public getDeviationFromIdeal(value: number): number {
    return Math.abs(value - this.valorIdeal);
  }

  public static fromObject(object: {[key: string]: any}): ParametroIdealEntity {
    const { 
      id, metricaId, valorIdeal, toleranciaMinima, toleranciaMaxima,
      descripcion, activo, createdAt, updatedAt 
    } = object;
    
    if (!id) throw 'Id is required';
    if (!metricaId) throw 'MetricaId is required';
    if (valorIdeal === undefined || valorIdeal === null) throw 'ValorIdeal is required';
    if (toleranciaMinima === undefined || toleranciaMinima === null) throw 'ToleranciaMinima is required';
    if (toleranciaMaxima === undefined || toleranciaMaxima === null) throw 'ToleranciaMaxima is required';

    return new ParametroIdealEntity(
      id, metricaId, valorIdeal, toleranciaMinima, toleranciaMaxima,
      descripcion, activo ?? true,
      createdAt ? new Date(createdAt) : undefined,
      updatedAt ? new Date(updatedAt) : undefined
    );
  }
}
