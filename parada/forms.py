from django import forms
from .models import Parada

class ParadaForm(forms.ModelForm):
    class Meta:
        model = Parada
        fields = [
            'name',
            'latitude',
            'longitude'
        ]
        labels = {
            'name': 'Nome',
        }