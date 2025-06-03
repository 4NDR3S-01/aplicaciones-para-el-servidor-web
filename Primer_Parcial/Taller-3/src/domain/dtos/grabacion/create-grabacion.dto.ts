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

    if (!nombreArchivo) return ['El nombre del archivo es requerido'];
    if (!rutaArchivo) return ['La ruta del archivo es requerida'];

    let newFechaGrabacion;
    if (fechaGrabacion) {
      newFechaGrabacion = new Date(fechaGrabacion);
      if (isNaN(newFechaGrabacion.getTime())) {
        return ['La fecha de grabación debe ser una fecha válida'];
      }
    }

    return [undefined, new CreateGrabacionDto(
      nombreArchivo, rutaArchivo, duracion, formato, newFechaGrabacion, tamanioArchivo
    )];
  }
}
