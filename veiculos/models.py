from django.db import models
from django.urls import reverse
from linhas.models import Linha

class Veiculo(models.Model):
    name = models.CharField(max_length=255)
    modelo = models.CharField(max_length=255)
    linha = models.ForeignKey(Linha,on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('veiculos:detail',args=[self.id])