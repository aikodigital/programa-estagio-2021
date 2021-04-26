import Parada from '@modules/paradas/typeorm/entities/Parada';
import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('linhas')
class Linha {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Parada, parada => parada.linha)
  parada: Parada[];

  @OneToMany(() => Veiculo, veiculo => veiculo.linha)
  veiculo: Veiculo[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Linha;
