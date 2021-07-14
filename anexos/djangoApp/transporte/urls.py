from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('busca_parada', views.busca_paradas, name='busca_parada'),
    path('deleta_parada/<int:id>', views.excluir_paradas, name='deleta_paradas'),
    path('editando_parada/<int:id>', views.editando_parada, name='editando_parada'),
    path('editar_parada', views.editar_parada, name='editar_parada'),
    path('criar_parada', views.criar_parada, name='criar_parada'),
    path('criar_linhaparada/<int:id>', views.criar_linhaparada, name='criar_linhaparada'),
    path('excluir_linhaparada/<int:id>', views.excluir_linhaparada, name='excluir_linhaparada'),
    path('veiculosporparada', views.veiculosporparada, name='veiculosporparada'),
    path('veiculosporparada/<int:id>', views.buscaveiculoparada, name='buscaveiculoparada'),
    path('busca_linha', views.busca_linha, name='busca_linha'),
    path('deleta_linha/<int:id>', views.deleta_linha, name='deleta_linha'),
    path('editando_linha/<int:id>', views.editando_linha, name='editando_linha'),
    path('editar_linha', views.editar_linha, name='editar_linha'),
    path('criar_linha', views.criar_linha, name='criar_linha'),
    path('veiculosporlinha', views.veiculosporlinha, name='veiculosporlinha'),
    path('busca_veiculo', views.busca_veiculo, name='busca_veiculo'),
    path('deleta_veiculo/<int:id>', views.deleta_veiculo, name='deleta_veiculo'),
    path('editando_veiculo/<int:id>', views.editando_veiculo, name='editando_veiculo'),
    path('editar_veiculo', views.editar_veiculo, name='editar_veiculo'),
    path('criar_veiculo', views.criar_veiculo, name='criar_veiculo'),

    path('popula_linhas', views.popula_linhas, name='popula_linhas'),
    path('popula_paradas', views.popula_paradas, name='popula_paradas'),
    path('popula_ppl', views.popula_ppl, name='popula_ppl'),
    path('popula_veiculos', views.popula_veiculos, name='popula_veiculos'),

]