<?php
require __DIR__.'../../../../vendor/autoload.php';
use \Principal\modelos\Veiculo;
use \Principal\modelos\PosicaoVeiculo;

$obVeiculo = Veiculo::getVeiculo($_GET['id']);
$obPosicaoVeiculo = PosicaoVeiculo::getPosicaoVeiculo($obVeiculo->id);

if(!$obVeiculo instanceof Veiculo){
	header('location: index.php:status=error');
	exit;
}


if(isset($_POST['nome'],$_POST['modelo'],$_POST['linhaId'],$_POST['latitude'],$_POST['longitude'])){

	$obVeiculo->nome = $_POST['nome'];
	$obVeiculo->modelo = $_POST['modelo'];
	$obVeiculo->linhaId = $_POST['linhaId'];
	$obVeiculo->atualizar();
  $obPosicaoVeiculo->latitude = $_POST['latitude'];
  $obPosicaoVeiculo->longitude = $_POST['longitude'];
  $obPosicaoVeiculo->atualizar();


	header('location: Listar.php?status=success');
	exit;

}


require __DIR__.'../../../../principal/paginas/header.php';
require __DIR__.'../../../../principal/paginas/veiculo/adicionarVeiculo.php';
require __DIR__.'../../../../principal/paginas/footer.php';
