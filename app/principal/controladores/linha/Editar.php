<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Linha;

$obLinha = Linha::getLinha($_GET['id']);

if(!$obLinha instanceof Linha){
	header('location: index.php:status=error');
	exit;
}

if(isset($_POST['nome'])){
  $obLinha->nome = $_POST['nome'];
  $obLinha->atualizar();

	header('location: Listar.php?status=success');
	exit;

}


require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/linha/adicionarLinha.php';
require __DIR__.'../../../../principal/paginas/footer.php';
