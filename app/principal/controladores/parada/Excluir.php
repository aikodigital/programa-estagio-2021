<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Parada;

$obParada = Parada::getParada($_GET['id']);

if(!$obParada instanceof Parada){
	header('location: index.php:status=error');
	exit;
}

if(isset($_POST['excluir'])){
	$obParada->excluir();
	header('location: Listar.php?status=success');
  exit;

}

require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/parada/excluir.php';
require __DIR__.'../../../../principal/paginas/footer.php';
