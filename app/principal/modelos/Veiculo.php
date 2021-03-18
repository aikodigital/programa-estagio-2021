<?php

namespace Principal\modelos;
use \Principal\banco\Banco;
use \PDO;

class Veiculo{

	public $id;

	public $nome;

	public $modelo;

	public $linhaId;


	public function cadastrar(){
		$obBanco = new Banco('veiculo');
		$this->id = $obBanco->insert([
			'nome' => $this->nome,
			'modelo' => $this->modelo,
			'linhaId' => $this->linhaId
		]);
		return true;
	}


	public function atualizar(){
		return(new Banco('veiculo'))->update('id = '.$this->id,[
			'nome' => $this->nome,
			'modelo' => $this->modelo,
			'linhaId' => $this->linhaId
		]);
	}

	public function excluir(){
		return (new Banco('veiculo'))->delete('id = '.$this->id);
	}

	public static function getVeiculos($where = null, $order = null, $limit = null){
		return (new Banco('veiculo'))->select($where,$order,$limit)
								   ->fetchAll(PDO::FETCH_CLASS,self::class);

	}

	public static function getVeiculo($id){
		return (new Banco('veiculo'))->select('id = '.$id)->fetchObject(self::class);
	}


}

 ?>
