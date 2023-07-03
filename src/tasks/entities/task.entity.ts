import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  completed: boolean;

  // @Column({ name: 'precio_venta', type: 'decimal', precision: 10, scale: 2 })
  // precioVenta: number;

  // @Column({ name: 'ano_modelo' })
  // anoModelo: number;

  // Agrega aquí las columnas de datos de auditoría, como createdAt, updatedAt, etc.
}
