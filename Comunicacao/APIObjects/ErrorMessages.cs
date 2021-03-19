using System;
using System.Collections.Generic;
using System.Text;

namespace Comunicacao.APIObjects
{
    public static class ErrorMessages
    {

        public static class Parade
        {
            public static string ErrorParadeList = "Erro ao listar paradas.";
            public static string ErrorGetParade = "Erro ao buscar parada.";
            public static string ErrorParadeCreate = "Erro ao criar parada.";
            public static string ErrorParadeEdit = "Erro ao editar parada.";
            public static string ErrorParadeRemove = "Erro ao remover parada.";
        }
        public static class Line
        {
            public static string ErrorLineList = "Erro ao listar linhas.";
            public static string ErrorGetLine = "Erro ao buscar linha.";
            public static string ErrorLineCreate = "Erro ao criar linha.";
            public static string ErrorLineEdit = "Erro ao editar linha.";
            public static string ErrorLineRemove = "Erro ao remover linha.";

            public static string ErrorLinkLineToParade = "Erro ao vincular linha à parada.";
            public static string ErrorUnlinkLineAndParade = "Erro ao desvincular linha e parada.";
            public static string ErrorLinesByParadeList = "Erro ao listar linhas por parada.";
        }
        public static class Vehicle
        {
            public static string ErrorVehicleList = "Erro ao listar veículos.";
            public static string ErrorGetVehicle = "Erro ao buscar veículo.";
            public static string ErrorVehicleCreate = "Erro ao criar veículo.";
            public static string ErrorVehicleEdit = "Erro ao editar veículo.";
            public static string ErrorVehicleRemove = "Erro ao remover veículo.";


            public static string ErrorGetVehicleLocation = "Erro ao buscar localização do veículo.";
            public static string ErrorVehicleLocationCreate = "Erro ao criar localização do veículo.";
            public static string ErrorVehicleLocationEdit = "Erro ao editar localização do veículo.";
            public static string ErrorVehicleLocationRemove = "Erro ao remover localização do veículo.";


        }
    }
}
