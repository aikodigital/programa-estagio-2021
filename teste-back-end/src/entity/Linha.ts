import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany,
} from 'typeorm';
import Parada from './Parada';
import Veiculo from './Veiculo';

@Entity()
export default class Linha {
  constructor(name: string) {
    this.name = name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Parada)
  @JoinTable()
  paradas: Parada[];

  @OneToMany(() => Veiculo, (veiculo) => veiculo.linha)
  veiculos: Veiculo[]
}
