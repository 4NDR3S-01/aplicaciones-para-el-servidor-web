export class MetricaEntity {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public tipoMetricaId: number,
    public unidadMedida: string,
    public valorMinimo?: number,
    public valorMaximo?: number,
    public activo: boolean = true,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}

  get isActive(): boolean {
    return this.activo;
  }

  public isValueInRange(value: number): boolean {
    if (this.valorMinimo !== undefined && value < this.valorMinimo) return false;
    if (this.valorMaximo !== undefined && value > this.valorMaximo) return false;
    return true;
  }

  public static fromObject(object: {[key: string]: any}): MetricaEntity {
    const { 
      id, nombre, descripcion, tipoMetricaId, unidadMedida, 
      valorMinimo, valorMaximo, activo, createdAt, updatedAt 
    } = object;
    
    if (!id) throw 'Id is required';
    if (!nombre) throw 'Nombre is required';
    if (!descripcion) throw 'Descripción is required';
    if (!tipoMetricaId) throw 'TipoMetricaId is required';
    if (!unidadMedida) throw 'UnidadMedida is required';

    return new MetricaEntity(
      id, nombre, descripcion, tipoMetricaId, unidadMedida,
      valorMinimo, valorMaximo, activo ?? true,
      createdAt ? new Date(createdAt) : undefined,
      updatedAt ? new Date(updatedAt) : undefined
    );
  }
}
