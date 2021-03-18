<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Parada;


$obParada = Parada::getParada($_GET['id']);

if(!$obParada instanceof Parada){
	header('location: index.php:status=error');
	exit;
}

if(isset($_POST['nome'],$_POST['latitude'],$_POST['longitude'])){

	$obParada->nome = $_POST['nome'];
  $obParada->latitude = $_POST['latitude'];
  $obParada->longitude = $_POST['longitude'];
  $obParada->atualizar();

	header('location: Listar.php?status=success');
	exit;

}


require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/parada/adicionarParada.php';
require __DIR__.'../../../../principal/paginas/footer.php';
