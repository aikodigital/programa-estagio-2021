<main>
  <section>
    <a name="voltar" href="../../../index.php">
    			<button  class="btn btn-success">Voltar</button>
    </a>

    <form method="post">
  		<div class="form-group">
  			<label>Nome da Parada</label><br>
  			<input type="text" class="form-control" name="nome" required value="<?=$obParada->nome?>">
  		</div>

      <div class="form-group">
  			<label>Latitude da Parada</label><br>
  			<input type="text" class="form-control" name="latitude" required value="<?=$obParada->latitude?>">
  		</div>
      <div class="form-group">
  			<label>Longitude da Parada</label><br>
  			<input type="text" class="form-control" name="longitude" required value="<?=$obParada->nome?>">
  		</div>

  		<div class="form-group mt-2">
  			<button type="submit" name="adicionar" class="btn btn-success">Adicionar</button>
  		</div>

  	</form>
  </section>
