<?php
require __DIR__.'../../../../vendor/autoload.php';

use \Principal\modelos\Parada;

$obParada = new Parada;

if(isset($_POST['nome'],$_POST['latitude'],$_POST['longitude'],$_POST['linhaId'])){

	$obParada->nome = $_POST['nome'];
	$obParada->latitude = $_POST['latitude'];
	$obParada->longitude = $_POST['longitude'];
	$obParada->linhaId = $_POST['linhaId'];
	$obParada->cadastrar();

	header('location: ../../../index.php?status=success');
	exit;
}


require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/parada/adicionarParada.php';
require __DIR__.'../../../../principal/paginas/footer.php';

 ?>
