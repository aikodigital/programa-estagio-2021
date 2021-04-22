from django import forms
from .models import PosicaoVeiculo

class PosicaoVeiculoForm(forms.ModelForm):
    class Meta:
        model = PosicaoVeiculo
        fields = [
            'latitude',
            'longitude',
            'veiculo',
        ]
        labels = {
            'name': 'Nome',
        }