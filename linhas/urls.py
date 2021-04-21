
from django.contrib import admin
from django.urls import path,include
from .views import (LinhaListView,
                    LinhaDetailView,
                    LinhaCreateView,
                    LinhaUpdateView,
                    LinhaDeleteView,
                    LinhaSearchListView)

app_name = 'linhas'

urlpatterns = [
    path('', LinhaListView.as_view(),name='list'),
    path('<int:pk>/', LinhaDetailView.as_view(),name='detail'),
    path('update/<int:pk>/', LinhaUpdateView.as_view(),name='update'),
    path('delete/<int:pk>/', LinhaDeleteView.as_view(),name='delete'),
    path('search/', LinhaSearchListView.as_view(),name='search'),
    path('create/', LinhaCreateView.as_view(),name='create'),


]