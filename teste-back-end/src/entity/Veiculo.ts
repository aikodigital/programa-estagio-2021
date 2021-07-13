import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import Linha from './Linha';

@Entity()
export default class Veiculo {
  constructor(name: string, modelo: string, linha: Linha) {
    this.name = name;
    this.modelo = modelo;
    this.linha = linha;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  modelo: string;

  @ManyToOne(() => Linha, (linha) => linha.veiculos)
  linha: Linha;
}
