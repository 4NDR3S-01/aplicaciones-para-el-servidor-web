export class GrabacionEntity {
  constructor(
    public id: number,
    public nombreArchivo: string,
    public rutaArchivo: string,
    public duracion?: number,
    public formato?: string,
    public fechaGrabacion?: Date,
    public tamanioArchivo?: number,
    public procesado: boolean = false,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}

  get isProcessed(): boolean {
    return this.procesado;
  }

  get fileExtension(): string {
    return this.nombreArchivo.split('.').pop()?.toLowerCase() || '';
  }

  public getDurationInMinutes(): number {
    return this.duracion ? Math.round(this.duracion / 60) : 0;
  }

  public getFileSizeInMB(): number {
    return this.tamanioArchivo ? Math.round(this.tamanioArchivo / (1024 * 1024) * 100) / 100 : 0;
  }

  public static fromObject(object: {[key: string]: any}): GrabacionEntity {
    const { 
      id, nombreArchivo, rutaArchivo, duracion, formato, fechaGrabacion,
      tamanioArchivo, procesado, createdAt, updatedAt 
    } = object;
    
    if (!id) throw 'Id is required';
    if (!nombreArchivo) throw 'NombreArchivo is required';
    if (!rutaArchivo) throw 'RutaArchivo is required';

    let newFechaGrabacion;
    if (fechaGrabacion) {
      newFechaGrabacion = new Date(fechaGrabacion);
      if (isNaN(newFechaGrabacion.getTime())) {
        throw 'FechaGrabacion is not a valid date';
      }
    }

    return new GrabacionEntity(
      id, nombreArchivo, rutaArchivo, duracion, formato, newFechaGrabacion,
      tamanioArchivo, procesado ?? false,
      createdAt ? new Date(createdAt) : undefined,
      updatedAt ? new Date(updatedAt) : undefined
    );
  }
}
