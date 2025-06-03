export class FeedbackEntity {
  constructor(
    public id: number,
    public grabacionId: number,
    public parametroIdealId: number,
    public valorObtenido: number,
    public puntuacion: number,
    public comentario?: string,
    public esManual: boolean = false,
    public fechaAnalisis?: Date,
    public confiabilidad?: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}

  get isManual(): boolean {
    return this.esManual;
  }

  get isAutomatic(): boolean {
    return !this.esManual;
  }

  public getPerformanceLevel(): 'excelente' | 'bueno' | 'regular' | 'deficiente' {
    if (this.puntuacion >= 90) return 'excelente';
    if (this.puntuacion >= 75) return 'bueno';
    if (this.puntuacion >= 60) return 'regular';
    return 'deficiente';
  }

  public isReliable(): boolean {
    return this.confiabilidad ? this.confiabilidad >= 0.8 : true;
  }

  public static fromObject(object: {[key: string]: any}): FeedbackEntity {
    const { 
      id, grabacionId, parametroIdealId, valorObtenido, puntuacion,
      comentario, esManual, fechaAnalisis, confiabilidad, createdAt, updatedAt 
    } = object;
    
    if (!id) throw 'Id is required';
    if (!grabacionId) throw 'GrabacionId is required';
    if (!parametroIdealId) throw 'ParametroIdealId is required';
    if (valorObtenido === undefined || valorObtenido === null) throw 'ValorObtenido is required';
    if (puntuacion === undefined || puntuacion === null) throw 'Puntuacion is required';

    let newFechaAnalisis;
    if (fechaAnalisis) {
      newFechaAnalisis = new Date(fechaAnalisis);
      if (isNaN(newFechaAnalisis.getTime())) {
        throw 'FechaAnalisis is not a valid date';
      }
    }

    return new FeedbackEntity(
      id, grabacionId, parametroIdealId, valorObtenido, puntuacion,
      comentario, esManual ?? false, newFechaAnalisis, confiabilidad,
      createdAt ? new Date(createdAt) : undefined,
      updatedAt ? new Date(updatedAt) : undefined
    );
  }
}
