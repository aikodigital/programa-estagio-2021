import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany,
} from 'typeorm';
import Linha from './Linha';

@Entity()
export default class Parada {
  constructor(name: string, latitude: number, longitude: number) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @ManyToMany(() => Linha, (linha) => linha.paradas)
  linhas: Linha[];
}
