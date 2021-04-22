import Linha from '../../../linhas/typeorm/entities/Linha';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('paradas')
class Parada {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Linha)
  @JoinColumn({ name: 'linhaId' })
  linha: Linha;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Parada;
