﻿namespace TransportePublico.Domain
{
    public class PosicaoVeiculo
    {
        public long Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public long VeiculoId { get; set; }
    }
}
