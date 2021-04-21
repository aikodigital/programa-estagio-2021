from django.shortcuts import render
from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Linha
from .forms import LinhaForm
class LinhaListView(ListView):
    model = Linha
    paginate_by = 10
    template_name = 'linhas/list.html'
    context_object_name = 'linhas'
    queryset = Linha.objects.all()

class LinhaSearchListView(LinhaListView):
    def get_queryset(self):
        queryset = super().get_queryset()
        search_mode = self.request.GET.get("search-mode")
        search_id = self.request.GET.get("search-id")
        if search_id:
            if search_mode == "LinhasPorID":
                queryset = queryset.filter(id__iexact=search_id)

            elif search_mode == "LinhasPorIDdeParada":
                queryset = queryset.filter(paradas__id__in=search_id)

        return queryset

class LinhaDetailView(DetailView):
    model = Linha
    template_name = 'linhas/detail.html'
    context_object_name = 'linha'

class LinhaCreateView(CreateView):
    model = Linha
    form_class = LinhaForm
    template_name = 'linhas/create.html'

class LinhaUpdateView(UpdateView):
    model = Linha
    form_class = LinhaForm
    template_name = 'linhas/edit.html'

class LinhaDeleteView(DeleteView):
    model = Linha
    form_class = LinhaForm
    template_name = 'linhas/delete.html'
    success_url = reverse_lazy('linhas:linhas')

