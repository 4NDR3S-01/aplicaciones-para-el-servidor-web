import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { TipoMetricaTypeORM } from './tipo-metrica.typeorm';
import { ParametroIdealTypeORM } from './parametro-ideal.typeorm';

@Entity({ name: 'metricas' })
export class MetricaTypeORM {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre!: string;

  @Column({ type: 'text' })
  descripcion!: string;

  @Column({ type: 'int', name: 'tipo_metrica_id' })
  tipoMetricaId!: number;

  @Column({ type: 'varchar', length: 50, name: 'unidad_medida' })
  unidadMedida!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true, name: 'valor_minimo' })
  valorMinimo?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true, name: 'valor_maximo' })
  valorMaximo?: number;

  @Column({ type: 'boolean', default: true })
  activo!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  // Relaciones
  @ManyToOne(() => TipoMetricaTypeORM, (tipoMetrica) => tipoMetrica.metricas)
  @JoinColumn({ name: 'tipo_metrica_id' })
  tipoMetrica!: TipoMetricaTypeORM;

  @OneToMany(() => ParametroIdealTypeORM, (parametro) => parametro.metrica)
  parametrosIdeales!: ParametroIdealTypeORM[];
}
