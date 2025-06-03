export class CreateTipoMetricaDto {
  private constructor(
    public readonly nombre: string,
    public readonly descripcion: string,
    public readonly activo?: boolean
  ) {}

  static create(props: {[key: string]: any}): [string?, CreateTipoMetricaDto?] {
    const { nombre, descripcion, activo } = props;

    if (!nombre) return ['El nombre es requerido'];
    if (!descripcion) return ['La descripción es requerida'];

    return [undefined, new CreateTipoMetricaDto(nombre, descripcion, activo)];
  }
}
