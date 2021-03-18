<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Veiculo;

$obVeiculo = Veiculo::getVeiculo($_GET['id']);

if(!$obVeiculo instanceof Veiculo){
	header('location: index.php:status=error');
	exit;
}

if(isset($_POST['excluir'])){
	$obVeiculo->excluir();
	header('location: Listar.php?status=success');
  exit;

}

require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/veiculo/excluir.php';
require __DIR__.'../../../../principal/paginas/footer.php';
