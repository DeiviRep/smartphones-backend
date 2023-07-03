import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Smartphone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  modelo: string;

  @Column({ type: 'decimal' })
  precioReferencial: number;

  @Column({ type: 'decimal' })
  precioVenta: number;

  @Column()
  añoModelo: number;

  // columnas de datos de auditoría
  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  // Eliminacion de un registro logico
  @Column({ default: false })
  estado: boolean;
}
