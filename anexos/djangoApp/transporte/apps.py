from django.apps import AppConfig
from requests import *


class TransporteConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'transporte'

class ConectaSPTRANS(object):

    url_base = 'https://aiko-olhovivo-proxy.aikodigital.io/'
    token = 'ca9dce64d85e3258239e6b8289f046d33c76f653c0abc69174dfb7f42f001a91'
    sessao = Session()


    def autenticar_sessao(self):
        url = '/Login/Autenticar?token=%s' % self.token
        response = self.sessao.post(self.url_base + url)
        if response.status_code == 200:
            return True
        return False

    def __get(self, parametro):
        self.autenticar_sessao()
        response = self.sessao.get(self.url_base + parametro)
        dados = response.json()
        # header = response.headers
        return dados

    def busca_onibus(self, onibus):
        return self.__get('/Linha/Buscar?termosBusca=%s' % onibus)

    def posicao_por_linha(self, linha):
        return self.__get('/Posicao/Linha?codigoLinha=%s' % linha)

    def busca_parada(self, linha):
        return self.__get('/Parada/BuscarParadasPorLinha?codigoLinha=%s' % linha)

    @property
    def busca_empresas(self):
        return self.__get('/Empresa')

    @property
    def posicao(self):
        return self.__get('/Posicao')