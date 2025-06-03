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

    if (!id || isNaN(Number(id))) return ['Se requiere un ID válido'];

    let newFechaGrabacion;
    if (fechaGrabacion) {
      newFechaGrabacion = new Date(fechaGrabacion);
      if (isNaN(newFechaGrabacion.getTime())) {
        return ['La fecha de grabación debe ser una fecha válida'];
      }
    }

    return [undefined, new UpdateGrabacionDto(
      +id, nombreArchivo, rutaArchivo, duracion, formato, newFechaGrabacion, tamanioArchivo, procesado
    )];
  }
}
