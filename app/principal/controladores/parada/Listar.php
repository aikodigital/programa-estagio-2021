<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Parada;

$paradas = Parada::getParadas();

$resultados = '';

	foreach ($paradas as $p) {
		$resultados .= '<tr>
							<td>'.$p->id.'</td>
							<td>'.$p->nome.'</td>
              <td>'.$p->latitude.'</td>
              <td>'.$p->longitude.'</td>
							<td>'.$p->linhaId.'</td>
							<td>
								<a name="editar" href="Editar.php?id='.$p->id.'"><button type="button" class="btn btn-primary">Editar</button>
								</a>
								<a name="excluir" href="Excluir.php?id='.$p->id.'"><button type="button" class="btn btn-primary">Excluir</button>
								</a>
							</td>
						</tr>';

	}

  require __DIR__.'../../../../principal/paginas/header.php';
  require __DIR__.'../../../../principal/paginas/parada/listar.php';
  require __DIR__.'../../../../principal/paginas/footer.php';
