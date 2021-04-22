from django.contrib import admin
from django.urls import path,include
from .views import (VeiculoListView,
                    VeiculoDetailView,
                    VeiculoCreateView,
                    VeiculoUpdateView,
                    VeiculoDeleteView,
                    VeiculoSearchListView)

app_name = 'veiculos'

urlpatterns = [
    path('', VeiculoListView.as_view(),name='list'),
    path('<int:pk>/', VeiculoDetailView.as_view(),name='detail'),
    path('update/<int:pk>/', VeiculoUpdateView.as_view(),name='update'),
    path('delete/<int:pk>/', VeiculoDeleteView.as_view(),name='delete'),
    path('search/', VeiculoSearchListView.as_view(),name='search'),
    path('create/', VeiculoCreateView.as_view(),name='create'),


]