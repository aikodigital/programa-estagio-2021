<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Linha;

$obLinha = Linha::getLinha($_GET['id']);

if(!$obLinha instanceof Linha){
	header('location: index.php:status=error');
	exit;
}

if(isset($_POST['excluir'])){
	$obLinha->excluir();
	header('location: Listar.php?status=success');
  exit;

}

require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/linha/excluir.php';
require __DIR__.'../../../../principal/paginas/footer.php';
