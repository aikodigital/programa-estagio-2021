/* eslint-disable camelcase */
import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
  ManyToMany, JoinTable, OneToMany,
} from 'typeorm';

import Parada from './Parada';
import Veiculo from './Veiculo';

  @Entity('Linha')
class Linha {
      @PrimaryGeneratedColumn('increment')
      Id: bigint;

      @Column('varchar')
      Name: string;

      @ManyToMany(() => Parada, (Paradas:Parada) => Paradas.Linhas)
      @JoinTable()
      paradas: Parada[];

      @OneToMany(() => Veiculo, (veiculo: Veiculo) => veiculo.linhaId)
      Veiculos: Veiculo[];

      @CreateDateColumn()
      created_at: Date;

      @UpdateDateColumn()
      updated_at: Date;
  }

export default Linha;
