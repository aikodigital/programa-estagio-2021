from django import forms
from .models import Linha

class LinhaForm(forms.ModelForm):
    class Meta:
        model = Linha
        fields = [
            'name',
            'paradas',

        ]
        labels = {
            'name': 'Nome',
        }