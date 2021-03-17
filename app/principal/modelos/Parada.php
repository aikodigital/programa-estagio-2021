<?php

namespace App\modelos;
use \App\banco\Banco;
use \PDO;

class Filme{

	public $id;

	public $titulo;

	public $descricao;

	public $data;

	public function cadastrar(){
		$obBanco = new Banco('filme');
		$this->id = $obBanco->insert([
			'titulo' => $this->titulo,
			'descricao' => $this->descricao,
			'data' => $this->data
		]);
		return true;
	}


	public function atualizar(){
		return(new Banco('filme'))->update('id = '.$this->id,[
			'titulo' => $this->titulo,
			'descricao' => $this->descricao,
			'data' => $this->data
		]);
	}

	public function excluir(){
		return (new Banco('filme'))->delete('id = '.$this->id);
	}

	public static function getFilmes($where = null, $order = null, $limit = null){
		return (new Banco('filme'))->select($where,$order,$limit)
								   ->fetchAll(PDO::FETCH_CLASS,self::class);

	}

	public static function getFilme($id){
		return (new Banco('filme'))->select('id = '.$id)->fetchObject(self::class);
	}


}

 ?>
