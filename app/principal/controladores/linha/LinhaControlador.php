<?php
require __DIR__.'../../../../vendor/autoload.php';

use \Principal\modelos\Linha;

$obLinha = new Linha;

if(isset($_POST['nome'])){

	$obLinha->nome = $_POST['nome'];
	$obLinha->cadastrar();

	header('location: ../../../index.php?status=success');
	exit;
}


require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/linha/adicionarLinha.php';
require __DIR__.'../../../../principal/paginas/footer.php';

 ?>
