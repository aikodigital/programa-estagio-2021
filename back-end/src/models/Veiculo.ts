/* eslint-disable camelcase */
import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';

import Linha from './Linha';

  @Entity('Veiculo')
class Veiculo {
      @PrimaryGeneratedColumn('increment')
      Id: bigint;

      @Column('varchar')
      Name: string;

      @Column('varchar')
      Modelo: string;

      @Column()
      LinhaId: bigint;

      @ManyToOne(() => Linha, (linhaId: Linha) => linhaId.Veiculos)
      @JoinColumn({ name: 'LinhaId' })
      linhaId: Linha;

      @CreateDateColumn()
      created_at: Date;

      @UpdateDateColumn()
      updated_at: Date;
  }

export default Veiculo;
