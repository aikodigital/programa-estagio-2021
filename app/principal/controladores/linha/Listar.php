<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Linha;

$linhas = Linha::getLinhas();

$resultados = '';

	foreach ($linhas as $l) {
		$resultados .= '<tr>
							<td>'.$l->id.'</td>
							<td>'.$l->nome.'</td>
							<td>
								<a name="editar" href="Editar.php?id='.$l->id.'"><button type="button" class="btn btn-primary">Editar</button>
								</a>
								<a name="excluir" href="Excluir.php?id='.$l->id.'"><button type="button" class="btn btn-primary">Excluir</button>
								</a>
							</td>
						</tr>';

	}

  require __DIR__.'../../../../principal/paginas/header.php';
  require __DIR__.'../../../../principal/paginas/linha/listar.php';
  require __DIR__.'../../../../principal/paginas/footer.php';
