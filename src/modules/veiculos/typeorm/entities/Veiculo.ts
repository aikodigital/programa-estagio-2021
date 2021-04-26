import Linha from '@modules/linhas/typeorm/entities/Linha';
import PosicaoVeiculo from '@modules/PosicoesVeiculos/typeorm/entities/PosicaoVeiculo';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => PosicaoVeiculo, posicaoVeiculo => posicaoVeiculo.veiculo)
  posicaoVeiculos: PosicaoVeiculo[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Veiculo;
