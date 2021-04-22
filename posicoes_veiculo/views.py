from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import PosicaoVeiculo
from .forms import PosicaoVeiculoForm
class PosicaoVeiculoListView(ListView):
    model = PosicaoVeiculo
    template_name = 'posicoes_veiculo/list.html'
    context_object_name = 'posicoes_veiculo'
    paginate_by = 10
    queryset = PosicaoVeiculo.objects.all()

class PosicaoVeiculoSearchListView(PosicaoVeiculoListView):
    def get_queryset(self):
        queryset = super().get_queryset()
        search_id = self.request.GET.get("search-id")
        if search_id:
            queryset = queryset.filter(
                Q(id__iexact=search_id)
            )
        return queryset

class PosicaoVeiculoDetailView(DetailView):
    model = PosicaoVeiculo
    template_name = 'posicoes_veiculo/detail.html'
    context_object_name = 'posicao_veiculo'

class PosicaoVeiculoCreateView(CreateView):
    model = PosicaoVeiculo
    form_class = PosicaoVeiculoForm
    template_name = 'posicoes_veiculo/create.html'

class PosicaoVeiculoUpdateView(UpdateView):
    model = PosicaoVeiculo
    form_class = PosicaoVeiculoForm
    template_name = 'posicoes_veiculo/edit.html'

class PosicaoVeiculoDeleteView(DeleteView):
    model = PosicaoVeiculo
    form_class = PosicaoVeiculoForm
    template_name = 'posicoes_veiculo/delete.html'
    success_url = reverse_lazy('posicoes_veiculo:list')
