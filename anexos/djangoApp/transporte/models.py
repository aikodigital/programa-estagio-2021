from django.db import models

# Create your models here.
class Parada(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(null=False, max_length=(150))
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)

class Linha(models.Model):
    linha = models.IntegerField(null=False, default=0)
    name = models.CharField(null=False, max_length=(30), unique=True)

    def __str__(self):
        return self.linha

class ParadaPorLinha(models.Model):
    linha = models.ForeignKey(Linha, on_delete=models.CASCADE)
    parada = models.ForeignKey(Parada, on_delete=models.CASCADE)

class Veiculo(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(null=False, max_length=(30))
    modelo = models.CharField(null=True, default="", max_length=(30))
    linha = models.ForeignKey(Linha, on_delete=models.CASCADE)

class PosicaoVeiculo(models.Model):
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)
