from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Veiculo
from .forms import VeiculoForm
class VeiculoListView(ListView):
    model = Veiculo
    template_name = 'veiculos/list.html'
    context_object_name = 'veiculos'
    paginate_by = 10
    queryset = Veiculo.objects.all()

class VeiculoSearchListView(VeiculoListView):
    def get_queryset(self):
        queryset = super().get_queryset()
        search_mode = self.request.GET.get("search-mode")
        search_id = self.request.GET.get("search-id")
        if search_id:
            if search_mode == "VeiculosPorID":
                queryset = queryset.filter(id__iexact=search_id)

            elif search_mode == "VeiculosPorIDdeLinha":
                queryset = queryset.filter(linha__id__iexact=search_id)

        return queryset
class VeiculoDetailView(DetailView):
    model = Veiculo
    template_name = 'veiculos/detail.html'
    context_object_name = 'veiculo'

class VeiculoCreateView(CreateView):
    model = Veiculo
    form_class = VeiculoForm
    template_name = 'veiculos/create.html'

class VeiculoUpdateView(UpdateView):
    model = Veiculo
    form_class = VeiculoForm
    template_name = 'veiculos/edit.html'

class VeiculoDeleteView(DeleteView):
    model = Veiculo
    form_class = VeiculoForm
    template_name = 'veiculos/delete.html'
    success_url = reverse_lazy('veiculos:list')
