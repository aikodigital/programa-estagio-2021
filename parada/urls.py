
from django.contrib import admin
from django.urls import path,include
from .views import (ParadaListView,
                    ParadaDetailView,
                    ParadaCreateView,
                    ParadaUpdateView,
                    ParadaDeleteView)

app_name = 'parada'

urlpatterns = [
    path('', ParadaListView.as_view(),name='paradas'),
    path('<int:pk>/', ParadaDetailView.as_view(),name='detail'),
    path('update/<int:pk>/', ParadaUpdateView.as_view(),name='update'),
    path('delete/<int:pk>/', ParadaDeleteView.as_view(),name='delete'),
    path('create/', ParadaCreateView.as_view(),name='create'),


]