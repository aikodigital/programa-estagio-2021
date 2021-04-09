/* eslint-disable camelcase */
import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany,
} from 'typeorm';

import linha from './Linha';

  @Entity('Parada')
class Parada {
      @PrimaryGeneratedColumn('increment')
      Id: bigint;

      @Column('varchar')
      Name: string;

      @Column('double precision')
      Latitude: number;

      @Column('double precision')
      Longitude: number;

      @ManyToMany(() => linha, (Linha:linha) => Linha.paradas)
      Linhas: linha[];

      @CreateDateColumn()
      created_at: Date;

      @UpdateDateColumn()
      updated_at: Date;
  }

export default Parada;
