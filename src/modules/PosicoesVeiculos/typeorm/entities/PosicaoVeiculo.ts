import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posicaoVeiculos')
class PosicaoVeiculo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToOne(() => Veiculo)
  @JoinColumn({ name: 'veiculoId' })
  veiculo: Veiculo;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default PosicaoVeiculo;
