from django.db import models
from django.urls import reverse
from veiculos.models import Veiculo

class PosicaoVeiculo(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    veiculo = models.ForeignKey(Veiculo,on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('posicoes_veiculo:detail',args=[self.id])