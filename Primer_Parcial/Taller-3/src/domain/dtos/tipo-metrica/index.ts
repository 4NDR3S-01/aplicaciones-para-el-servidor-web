export class CreateTipoMetricaDto {
  private constructor(
    public readonly nombre: string,
    public readonly descripcion: string,
    public readonly activo?: boolean
  ) {}

  static create(props: {[key: string]: any}): [string?, CreateTipoMetricaDto?] {
    const { nombre, descripcion, activo } = props;

    if (!nombre) return ['Nombre is required'];
    if (!descripcion) return ['Descripción is required'];

    return [undefined, new CreateTipoMetricaDto(nombre, descripcion, activo)];
  }
}

export class UpdateTipoMetricaDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly descripcion?: string,
    public readonly activo?: boolean
  ) {}

  get values() {
    const returnObj: {[key: string]: any} = {};
    
    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.descripcion) returnObj.descripcion = this.descripcion;
    if (this.activo !== undefined) returnObj.activo = this.activo;

    return returnObj;
  }

  static create(props: {[key: string]: any}): [string?, UpdateTipoMetricaDto?] {
    const { id, nombre, descripcion, activo } = props;

    if (!id || isNaN(Number(id))) return ['Valid id is required'];

    return [undefined, new UpdateTipoMetricaDto(+id, nombre, descripcion, activo)];
  }
}
