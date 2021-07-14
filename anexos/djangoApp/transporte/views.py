from django.shortcuts import render, redirect, get_object_or_404
from .apps import ConectaSPTRANS
from .models import *
from django.core.paginator import Paginator
from django.contrib import messages


def home(request):
    titulo_pagina = 'Home'
    dados = {'titulo_pagina': titulo_pagina}
    return render(request, 'pages/home.html', context=dados)

# Paradas
def busca_paradas(request):
    titulo_pagina = 'Home'
    paginator = Paginator(Parada.objects.all().order_by('id'), 15)
    paradas_veiculos = ParadaPorLinha.objects.all()
    page = request.GET.get('page')
    paradas = paginator.get_page(page)
    dados = {'titulo_pagina': titulo_pagina,
             'paradas': paradas,
             'paradas_veiculos':paradas_veiculos}

    return render(request, 'pages/busca_parada.html', context=dados)

def excluir_paradas(request, id):
    parada = Parada.objects.filter(id=id)
    parada.delete()
    messages.success(request, 'Parada excluida com sucesso')
    return redirect('busca_parada')

def excluir_linhaparada(request, id):
    linha = ParadaPorLinha.objects.filter(id=id)
    linha.delete()
    messages.success(request, 'Linha excluida na Parada com sucesso')
    return redirect('busca_parada')

def criar_parada(request):

    if request.method == 'POST':
        id = request.POST['id']
        name = request.POST['name']
        latitude = request.POST['latitude']
        longitude = request.POST['longitude']
        parada = Parada(id, name, latitude,longitude)
        parada.save()

        messages.success(request, 'Parada incluída com sucesso')
        print(id, name, latitude,longitude)
        return redirect('busca_parada')

    titulo_pagina = 'Nova Parada'
    dados = {'titulo_pagina': titulo_pagina}
    return render(request, 'pages/nova_parada.html', dados)

def editando_parada(request, id):
    parada = Parada.objects.filter(id=id)
    titulo_pagina = 'Editar Vaga'
    dados = {
        'parada': parada,
        'titulo_pagina': titulo_pagina
    }
    return render(request, 'pages/editar_parada.html', dados)

def editar_parada(request):
    if request.method == "POST":
        id = request.POST['id']
        name = request.POST['name']
        latitude = request.POST['latitude']
        longitude = request.POST['longitude']

        parada = Parada.objects.get(id=id)
        parada.name = name
        parada.latitude = latitude
        parada.longitude = longitude
        parada.save()

        messages.success(request, 'Parada editada com sucesso')
        return redirect('busca_parada')

def veiculosporparada(request):
    titulo_pagina = 'Veículos por Parada'
    dados = {'titulo_pagina': titulo_pagina}

    if 'busca' in request.GET:
        id = request.GET['busca']
        if id:
            parada = ParadaPorLinha.objects.filter(parada__id__exact=id)
            nome = Parada.objects.filter(id__exact=id)
            dados.update({'parada': parada, 'nome':nome})

    return render(request, 'pages/veiculosporparada.html', dados)

def buscaveiculoparada(request, id):
    titulo_pagina = 'Veículos por Parada'
    parada = ParadaPorLinha.objects.filter(parada_id=id)
    nome = Parada.objects.filter(id=id)
    dados = {'titulo_pagina': titulo_pagina,'parada': parada, 'nome': nome}

    return render(request, 'pages/veiculosporparada.html', dados)

def criar_linhaparada(request, id):
    if request.method == 'POST':
        linha_id = request.POST['linha']
        inserirlinha = ParadaPorLinha(linha_id=linha_id, parada_id=id)
        inserirlinha.save()

        messages.success(request, 'Linha incluída com sucesso na Parada')

        return redirect('busca_parada')

    linhas = Linha.objects.all()
    titulo_pagina = 'Nova Linha em Parada'
    dados = {'titulo_pagina': titulo_pagina, 'id':id, 'linhas': linhas}
    return render(request, 'pages/nova_linhaparada.html', dados)



# Linhas
def busca_linha(request):
    titulo_pagina = 'Linhas Cadastradas'
    paginator = Paginator(Linha.objects.all().order_by('id'), 15)
    page = request.GET.get('page')
    linhas = paginator.get_page(page)
    dados = {'titulo_pagina': titulo_pagina,
             'linhas': linhas}
    return render(request, 'pages/busca_linha.html', context=dados)

def deleta_linha(request, id):
    linha = Linha.objects.filter(id=id)
    linha.delete()
    messages.success(request, 'Linha excluida com sucesso')
    return redirect('busca_linha')

def criar_linha(request):

    if request.method == 'POST':
        name = request.POST['name']
        linhareq = request.POST['linha']
        linha = Linha(name=name, linha=linhareq)

        if not Linha.objects.filter(name=name):
            linha.save()
            messages.success(request, 'Linha incluída com sucesso')
            return redirect('busca_linha')
        else:
            messages.error(request, 'Já existe linha com esse nome cadastrado')
            return redirect('busca_linha')

    titulo_pagina = 'Nova Linha'
    dados = {'titulo_pagina': titulo_pagina}
    return render(request, 'pages/nova_linha.html', dados)

def editando_linha(request, id):
    linha = Linha.objects.filter(id=id)
    titulo_pagina = 'Editar Linha'
    dados = {
        'linha': linha,
        'titulo_pagina': titulo_pagina
    }
    return render(request, 'pages/editar_linha.html', dados)

def editar_linha(request):
    if request.method == "POST":
        print(request.POST)
        id = request.POST['id']
        name = request.POST['name']
        linhareq = request.POST['linha']


        linha = Linha.objects.get(id=id)
        linha.linha = linhareq

        if not Linha.objects.filter(name=name):
            linha.name = name
            linha.save()
        else:
            messages.error(request, 'Essa nome de onibus já existe')
            return redirect('busca_linha')

        messages.success(request, 'Linha editada com sucesso')
        return redirect('busca_linha')

def veiculosporlinha(request):
    titulo_pagina = 'Veículos por Linha'
    dados = {'titulo_pagina': titulo_pagina}

    if 'busca' in request.GET:
        linha = request.GET['busca']
        if linha:
            veiculos = Linha.objects.filter(linha=linha)
            dados.update({'veiculos': veiculos})

    return render(request, 'pages/veiculosporlinha.html', dados)

# Veículos
def busca_veiculo(request):
    titulo_pagina = 'Veículos Cadastradas'
    paginator = Paginator(Veiculo.objects.all().order_by('id'), 15)
    page = request.GET.get('page')
    veiculos = paginator.get_page(page)
    linhas = Linha.objects.all()
    dados = {'titulo_pagina': titulo_pagina,
             'linhas': linhas,
             'veiculos': veiculos,
             }
    return render(request, 'pages/busca_veiculo.html', context=dados)

def deleta_veiculo(request, id):
    veiculo = Veiculo.objects.filter(id=id)
    veiculo.delete()
    messages.success(request, 'Veiculo excluido com sucesso')
    return redirect('busca_veiculo')

def criar_veiculo(request):

    if request.method == 'POST':
        id = request.POST['id']
        name = request.POST['name']
        linha = request.POST['linha']
        modelo = request.POST['modelo']

        if linha == "Selecione":
            messages.error(request, 'Você deve selecionar uma linha')
        else:
            if not Veiculo.objects.filter(id=id):
                veiculo = Veiculo(id=id, name=name, linha_id=linha, modelo=modelo)
                veiculo.save()
                messages.success(request, 'Veículo incluída com sucesso')
            else:
                messages.error(request, 'Já possui um veículo com esse ID.')
        return redirect('busca_veiculo')

    linhas = Linha.objects.all()


    titulo_pagina = 'Novo Veículo'
    dados = {'titulo_pagina': titulo_pagina, 'linhas':linhas}
    return render(request, 'pages/nova_veiculo.html', dados)

def editando_veiculo(request, id):
    veiculo = Veiculo.objects.filter(id=id)
    titulo_pagina = 'Editar Veículo'
    linhas = Linha.objects.all().order_by('linha')
    dados = {
        'veiculo': veiculo,
        'linhas': linhas,
        'titulo_pagina': titulo_pagina
    }
    return render(request, 'pages/editar_veiculo.html', dados)

def editar_veiculo(request):
    if request.method == "POST":
        id = request.POST['id']
        name = request.POST['name']
        linha = int(request.POST['linha'])
        modelo = request.POST['modelo']

        veiculo = Veiculo.objects.get(id=id)

        if veiculo.name == name or not Veiculo.objects.filter(id=id):
            veiculo.name = name
            if veiculo.linha_id != linha:
                veiculo.linha_id = Linha.objects.get(id=linha)
            veiculo.modelo = modelo
            veiculo.save()
            messages.success(request, 'Veículo editado com sucesso')
        else:
            messages.error(request, 'Essa nome de onibus já existe')

        return redirect('busca_veiculo')


# Funções e Conectando na API
def posicao_por_linha(linha):
    posicao = ConectaSPTRANS().posicao_por_linha(linha)['vs']
    return posicao

def popula_linhas(request):
    veiculos = ConectaSPTRANS().posicao
    veiculos = veiculos['l']
    novas = 0

    for veiculo in veiculos:
        linha = veiculo['cl']
        name = veiculo['c']

        if not Linha.objects.filter(name=name):
            novo_veiculo = Linha(linha=linha, name=name)
            novo_veiculo.save()
            novas += 1
    print(novas)

    messages.success(request, f'Foram inseridas {novas} Linhas novas.')
    return redirect('home')

def popula_paradas(request):
    linhas = carrega_linhas()
    novas = 0
    atualizada = 0
    for linha in linhas:
        paradas = ConectaSPTRANS().busca_parada(linha)
        if paradas:
            for item in paradas:
                try:
                    id = item['cp']
                    name = item['np']
                    latitude = item['py']
                    longitude = item['px']
                    # print(id, name, latitude, longitude)

                    if not Parada.objects.filter(id=id):
                        parada = Parada(id=id, name=name, latitude=latitude, longitude=longitude)
                        parada.save()
                        novas += 1
                    else:
                        parada = Parada.objects.get(id=id)
                        parada.name = name
                        parada.latitude = latitude
                        parada.longitude = longitude
                        parada.save()
                        atualizada += 1
                except:
                    pass

    messages.success(request, f'Foram inseridas {novas} Paradas novas e feito {atualizada} atualizações.')
    return redirect('home')

def popula_ppl(request):
    linhas = carrega_linhas()
    nova = 0
    for linha in linhas:
        paradas = ConectaSPTRANS().busca_parada(linha)
        if paradas:
            for item in paradas:
                try:
                    codigo_parada = item['cp']
                    if Linha.objects.filter(linha=linha):
                        if Parada.objects.filter(id=codigo_parada):
                            if not ParadaPorLinha.objects.filter(linha=linha, parada=codigo_parada):
                                paradaporlinha = ParadaPorLinha(linha_id=linha, parada_id=codigo_parada)
                                paradaporlinha.save()
                                nova += 1
                except:
                    pass
    messages.success(request, f'Foram feitas {nova} novas conexões')
    return redirect('home')

def popula_veiculos(request):
    veiculos = ConectaSPTRANS().posicao
    veiculos = veiculos['l']
    novo = 0
    atualizado = 0

    for i in range (len(veiculos)):
        for j in range (len(veiculos[i]['vs'])):
            print(f'{veiculos[i]["c"]}, {veiculos[i]["cl"]}, {veiculos[i]["vs"][j]["p"]}')
            prefixo_veiculo = veiculos[i]["vs"][j]["p"]
            linha_id = veiculos[i]["cl"]
            name = veiculos[i]["c"]
            if not Veiculo.objects.filter(id=prefixo_veiculo):
                novoveiculo = Veiculo(id=prefixo_veiculo, name=name, linha_id=linha_id)
                novoveiculo.save()
                novo += 1
            else:
                atualiza_veiculo = Veiculo.objects.get(id=prefixo_veiculo)
                atualiza_veiculo.name = name
                atualiza_veiculo.linha_id = linha_id
                atualiza_veiculo.save()
                atualizado += 1

    messages.success(request, f'Foram inseridos {novo} Veículos novos e feito {atualizado} atualizações.')
    return redirect('home')

def carrega_linhas():
    veiculos = ConectaSPTRANS().posicao
    veiculos = veiculos['l']
    linhas = [veiculo['cl'] for veiculo in veiculos]

    return linhas

# def carrega_empresa():
#     empresas = ConectaSPTRANS().busca_empresas
#     print (empresas)

