from django.shortcuts import render
from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Parada
from .forms import ParadaForm
class ParadaListView(ListView):
    model = Parada
    template_name = 'parada/index.html'
    context_object_name = 'paradas'
    queryset = Parada.objects.all()

class ParadaSearchListView(ParadaListView):
    def get_queryset(self):
        queryset = super().get_queryset()
        search_id = self.request.GET.get("search-id")
        queryset = queryset.filter(
            Q(id__iexact=search_id)
        )
        return queryset

class ParadaDetailView(DetailView):
    model = Parada
    template_name = 'parada/detail.html'
    context_object_name = 'parada'

class ParadaCreateView(CreateView):
    model = Parada
    form_class = ParadaForm
    template_name = 'parada/create.html'

class ParadaUpdateView(UpdateView):
    model = Parada
    form_class = ParadaForm
    template_name = 'parada/edit.html'

class ParadaDeleteView(DeleteView):
    model = Parada
    form_class = ParadaForm
    template_name = 'parada/delete.html'
    success_url = reverse_lazy('parada:paradas')
