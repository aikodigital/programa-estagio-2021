<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Veiculo;

$veiculos = Veiculo::getVeiculos();

$resultados = '';

	foreach ($veiculos as $v) {
		$resultados .= '<tr>
							<td>'.$v->id.'</td>
							<td>'.$v->nome.'</td>
							<td>'.$v->modelo.'</td>
							<td>
								<a name="editar" href="Editar.php?id='.$v->id.'"><button type="button" class="btn btn-primary">Editar</button>
								</a>
								<a name="excluir" href="Excluir.php?id='.$v->id.'"><button type="button" class="btn btn-primary">Excluir</button>
								</a>
							</td>
						</tr>';

	}

  require __DIR__.'../../../../principal/paginas/header.php';
  require __DIR__.'../../../../principal/paginas/veiculo/listar.php';
  require __DIR__.'../../../../principal/paginas/footer.php';
