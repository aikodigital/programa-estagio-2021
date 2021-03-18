<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Veiculo;

$obVeiculos = Veiculo::getVeiculos('linhaId ='.$_GET['id']);

$resultados = '';

	foreach ($obVeiculos as $v) {
		$resultados .= '<tr>
							<td>'.$v->id.'</td>
							<td>'.$v->nome.'</td>
							<td>'.$v->modelo.'</td>
						</tr>';

	}

  require __DIR__.'../../../../principal/paginas/header.php';
  require __DIR__.'../../../../principal/paginas/linha/veiculos.php';
  require __DIR__.'../../../../principal/paginas/footer.php';
