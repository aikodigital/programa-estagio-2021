/* eslint-disable camelcase */
import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn,
} from 'typeorm';

import Veiculo from './Veiculo';

  @Entity('PosiçãoVeiculo')
class PosiçãoVeiculo {
      @PrimaryGeneratedColumn('increment')
      Id: bigint;

      @Column('double precision')
      Latitude: number;

      @Column('double precision')
      Longitude: number;

      @Column('bigint')
      VeiculoId: bigint;

      @OneToOne(() => Veiculo)
      @JoinColumn({ name: 'VeiculoId' })
      veiculoId: Veiculo;

      @CreateDateColumn()
      created_at: Date;

      @UpdateDateColumn()
      updated_at: Date;
  }

export default PosiçãoVeiculo;
