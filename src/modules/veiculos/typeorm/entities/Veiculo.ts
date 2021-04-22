import Linha from '../../../linhas/typeorm/entities/Linha';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('veiculos')
class Veiculo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  modelo: string;

  @ManyToOne(() => Linha)
  @JoinColumn({ name: 'linhaId' })
  linha: Linha;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Veiculo;
