from django.db import models
from parada.models import Parada
from django.urls import reverse

class Linha(models.Model):
    name = models.CharField(max_length=255)
    paradas = models.ManyToManyField(Parada)
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('linhas:detail',args=[self.id])
