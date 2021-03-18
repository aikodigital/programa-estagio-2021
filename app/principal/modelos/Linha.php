<?php

namespace Principal\modelos;
use \Principal\banco\Banco;
use \PDO;

class Linha{

	public $id;

	public $nome;

	public function cadastrar(){
		$obBanco = new Banco('linha');
		$this->id = $obBanco->insert([
			'nome' => $this->nome,
		]);
		return true;
	}


	public function atualizar(){
		return(new Banco('linha'))->update('id = '.$this->id,[
			'nome' => $this->nome,
		]);
	}

	public function excluir(){
		return (new Banco('linha'))->delete('id = '.$this->id);
	}

	public static function getLinhas($where = null, $order = null, $limit = null){
		return (new Banco('linha'))->select($where,$order,$limit)
								   ->fetchAll(PDO::FETCH_CLASS,self::class);

	}

	public static function getLinha($id){
		return (new Banco('linha'))->select('id = '.$id)->fetchObject(self::class);
	}


}

 ?>
