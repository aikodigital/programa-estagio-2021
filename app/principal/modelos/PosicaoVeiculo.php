<?php

namespace Principal\modelos;
use \Principal\banco\Banco;
use \PDO;

class PosicaoVeiculo{

	public $id;

	public $latitude;

	public $longitude;

	public $veiculoId;

	public function cadastrar(){
		$obBanco = new Banco('posicaoveiculo');
		$this->id = $obBanco->insert([
			'latitude' => $this->latitude,
			'longitude' => $this->longitude,
			'veiculoId' => $this->veiculoId
		]);
		return true;
	}


	public function atualizar(){
		return(new Banco('posicaoveiculo'))->update('id = '.$this->id,[
			'latitude' => $this->latitude,
			'longitude' => $this->longitude,
			'veiculoId' => $this->veiculoId
		]);
	}

	public function excluir(){
		return (new Banco('posicaoveiculo'))->delete('id = '.$this->id);
	}

	public static function getPosicaoVeiculos($where = null, $order = null, $limit = null){
		return (new Banco('posicaoveiculo'))->select($where,$order,$limit)
								   ->fetchAll(PDO::FETCH_CLASS,self::class);

	}

	public static function getPosicaoVeiculo($id){
		return (new Banco('posicaoveiculo'))->select('veiculoId = '.$id)->fetchObject(self::class);
	}


}

 ?>
