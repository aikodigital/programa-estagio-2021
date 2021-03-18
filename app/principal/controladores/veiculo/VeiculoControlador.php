<?php
require __DIR__.'../../../../vendor/autoload.php';

use \Principal\modelos\Veiculo;
use \Principal\modelos\PosicaoVeiculo;

$obVeiculo = new Veiculo;

$obPosicaoVeiculo = new PosicaoVeiculo;

if(isset($_POST['nome'],$_POST['modelo'],$_POST['linhaId'])){

	$obVeiculo->nome = $_POST['nome'];
	$obVeiculo->modelo = $_POST['modelo'];
	$obVeiculo->linhaId = $_POST['linhaId'];
	$obPosicaoVeiculo->latitude = $_POST['latitude'];
	$obPosicaoVeiculo->longitude = $_POST['longitude'];
	$obVeiculo->cadastrar();
	$obPosicaoVeiculo->veiculoId = $obVeiculo->id;
	$obPosicaoVeiculo->cadastrar();

	header('location: ../../../index.php?status=success');
	exit;
}


require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/veiculo/adicionarVeiculo.php';
require __DIR__.'../../../../principal/paginas/footer.php';

 ?>
