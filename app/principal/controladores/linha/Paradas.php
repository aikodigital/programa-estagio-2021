<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Parada;

$obParadas = Parada::getParadas('linhaId ='.$_GET['id']);

$resultados = '';

	foreach ($obParadas as $p) {
		$resultados .= '<tr>
							<td>'.$p->id.'</td>
							<td>'.$p->nome.'</td>
						</tr>';

	}

  require __DIR__.'../../../../principal/paginas/header.php';
  require __DIR__.'../../../../principal/paginas/linha/paradas.php';
  require __DIR__.'../../../../principal/paginas/footer.php';
