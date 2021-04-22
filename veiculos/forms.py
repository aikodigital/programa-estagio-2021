from django import forms
from .models import Veiculo

class VeiculoForm(forms.ModelForm):
    class Meta:
        model = Veiculo
        fields = [
            'name',
            'modelo',
            'linha',
        ]
        labels = {
            'name': 'Nome',
        }