import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('office')
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  office: string;

  @Column({ type: 'boolean', default: false })
  fullAcess: boolean;
}
