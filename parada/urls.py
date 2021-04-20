
from django.contrib import admin
from django.urls import path,include
from .views import ParadaListView

urlpatterns = [
    path('', ParadaListView.as_view(),name='paradas'),


]