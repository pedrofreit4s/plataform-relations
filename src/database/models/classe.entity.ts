import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Course } from './course.entity';

@Entity('classes')
export class Classe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie: string;

  @Column()
  thumbnail: string;

  @Column()
  attachment: string;

  @ManyToOne((type) => Course, (classes) => Classe, { eager: true })
  course: Course;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
