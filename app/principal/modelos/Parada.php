<?php

namespace Principal\modelos;
use \Principal\banco\Banco;
use \PDO;

class Parada{

	public $id;

	public $nome;

	public $latitude;

	public $longitude;

	public $linhaId;

	public function cadastrar(){
		$obBanco = new Banco('parada');
		$this->id = $obBanco->insert([
			'nome' => $this->nome,
			'longitude' => $this->longitude,
			'latitude' => $this->latitude,
			'linhaId' => $this->linhaId
		]);
		return true;
	}


	public function atualizar(){
		return(new Banco('parada'))->update('id = '.$this->id,[
			'nome' => $this->nome,
			'longitude' => $this->longitude,
			'latitude' => $this->latitude,
			'idLinha' => $this->linhaId
		]);
	}

	public function excluir(){
		return (new Banco('parada'))->delete('id = '.$this->id);
	}

	public static function getParadas($where = null, $order = null, $limit = null){
		return (new Banco('parada'))->select($where,$order,$limit)
								   ->fetchAll(PDO::FETCH_CLASS,self::class);

	}

	public static function getParada($id){
		return (new Banco('parada'))->select('id = '.$id)->fetchObject(self::class);
	}


}

 ?>
