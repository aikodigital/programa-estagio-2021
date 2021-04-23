from django.shortcuts import render
from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Parada
from .forms import ParadaForm

class ParadaListView(ListView):
    model = Parada
    template_name = 'parada/list.html'
    context_object_name = 'paradas'
    paginate_by = 10
    queryset = Parada.objects.all()


class ParadaSearchListView(ParadaListView):
    def get_queryset(self):
        queryset = super().get_queryset()
        search_value = self.request.GET.get("search-value")
        if search_value:
            queryset = queryset.filter(
                Q(id__iexact=search_value) |
                Q(name__icontains=search_value)
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
    template_name = 'parada/delete.html'
    success_url = reverse_lazy('parada:list')
