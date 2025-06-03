export class TipoMetricaEntity {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public activo: boolean = true,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}

  get isActive(): boolean {
    return this.activo;
  }

  public static fromObject(object: {[key: string]: any}): TipoMetricaEntity {
    const { id, nombre, descripcion, activo, createdAt, updatedAt } = object;
    
    if (!id) throw 'Id is required';
    if (!nombre) throw 'Nombre is required';
    if (!descripcion) throw 'Descripción is required';

    return new TipoMetricaEntity(
      id, 
      nombre, 
      descripcion, 
      activo ?? true,
      createdAt ? new Date(createdAt) : undefined,
      updatedAt ? new Date(updatedAt) : undefined
    );
  }
}
