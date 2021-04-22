from django.db import models
from django.urls import reverse

class Parada(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('parada:detail',args=[self.id])
    class Meta:
        ordering = ['pk']