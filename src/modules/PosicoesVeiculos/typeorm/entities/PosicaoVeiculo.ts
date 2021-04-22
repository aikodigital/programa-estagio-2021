import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posicaoVeiculos')
class PosicaoVeiculo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Veiculo)
  @JoinColumn({ name: 'veiculoId' })
  veiculos: Veiculo[];

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default PosicaoVeiculo;
