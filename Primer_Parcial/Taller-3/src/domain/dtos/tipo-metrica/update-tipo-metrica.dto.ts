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

    if (!id || isNaN(Number(id))) return ['Se requiere un ID válido'];

    return [undefined, new UpdateTipoMetricaDto(+id, nombre, descripcion, activo)];
  }
}
