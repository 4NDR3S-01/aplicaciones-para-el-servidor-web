export class CreateGrabacionDto {
  private constructor(
    public readonly nombreArchivo: string,
    public readonly rutaArchivo: string,
    public readonly duracion?: number,
    public readonly formato?: string,
    public readonly fechaGrabacion?: Date,
    public readonly tamanioArchivo?: number
  ) {}

  static create(props: {[key: string]: any}): [string?, CreateGrabacionDto?] {
    const { nombreArchivo, rutaArchivo, duracion, formato, fechaGrabacion, tamanioArchivo } = props;

    if (!nombreArchivo) return ['NombreArchivo is required'];
    if (!rutaArchivo) return ['RutaArchivo is required'];

    let newFechaGrabacion;
    if (fechaGrabacion) {
      newFechaGrabacion = new Date(fechaGrabacion);
      if (isNaN(newFechaGrabacion.getTime())) {
        return ['FechaGrabacion must be a valid date'];
      }
    }

    return [undefined, new CreateGrabacionDto(
      nombreArchivo, rutaArchivo, duracion, formato, newFechaGrabacion, tamanioArchivo
    )];
  }
}

export class UpdateGrabacionDto {
  private constructor(
    public readonly id: number,
    public readonly nombreArchivo?: string,
    public readonly rutaArchivo?: string,
    public readonly duracion?: number,
    public readonly formato?: string,
    public readonly fechaGrabacion?: Date,
    public readonly tamanioArchivo?: number,
    public readonly procesado?: boolean
  ) {}

  get values() {
    const returnObj: {[key: string]: any} = {};
    
    if (this.nombreArchivo) returnObj.nombreArchivo = this.nombreArchivo;
    if (this.rutaArchivo) returnObj.rutaArchivo = this.rutaArchivo;
    if (this.duracion !== undefined) returnObj.duracion = this.duracion;
    if (this.formato) returnObj.formato = this.formato;
    if (this.fechaGrabacion) returnObj.fechaGrabacion = this.fechaGrabacion;
    if (this.tamanioArchivo !== undefined) returnObj.tamanioArchivo = this.tamanioArchivo;
    if (this.procesado !== undefined) returnObj.procesado = this.procesado;

    return returnObj;
  }

  static create(props: {[key: string]: any}): [string?, UpdateGrabacionDto?] {
    const { id, nombreArchivo, rutaArchivo, duracion, formato, fechaGrabacion, tamanioArchivo, procesado } = props;

    if (!id || isNaN(Number(id))) return ['Valid id is required'];

    let newFechaGrabacion;
    if (fechaGrabacion) {
      newFechaGrabacion = new Date(fechaGrabacion);
      if (isNaN(newFechaGrabacion.getTime())) {
        return ['FechaGrabacion must be a valid date'];
      }
    }

    return [undefined, new UpdateGrabacionDto(
      +id, nombreArchivo, rutaArchivo, duracion, formato, newFechaGrabacion, tamanioArchivo, procesado
    )];
  }
}
