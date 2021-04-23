from django.contrib import admin
from django.urls import path,include
from .views import (PosicaoVeiculoListView,
                    PosicaoVeiculoDetailView,
                    PosicaoVeiculoCreateView,
                    PosicaoVeiculoUpdateView,
                    PosicaoVeiculoDeleteView,
                    PosicaoVeiculoSearchListView)

app_name = 'posicoes_veiculo'

urlpatterns = [
    path('', PosicaoVeiculoListView.as_view(),name='list'),
    path('<int:pk>/', PosicaoVeiculoDetailView.as_view(),name='detail'),
    path('update/<int:pk>/', PosicaoVeiculoUpdateView.as_view(),name='update'),
    path('delete/<int:pk>/', PosicaoVeiculoDeleteView.as_view(),name='delete'),
    path('search/', PosicaoVeiculoSearchListView.as_view(),name='search'),
    path('create/', PosicaoVeiculoCreateView.as_view(),name='create'),


]