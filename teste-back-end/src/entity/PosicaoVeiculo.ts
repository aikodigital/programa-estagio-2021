import {
  Entity, Column, OneToOne, JoinColumn,
} from 'typeorm';
import Veiculo from './Veiculo';

@Entity()
export default class PosicaoVeiculo {
  constructor(latitude: number, longitude: number, veiculo: Veiculo) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.veiculo = veiculo;
  }

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @OneToOne(() => Veiculo, {
    primary: true,
  })
  @JoinColumn()
  veiculo: Veiculo;
}
