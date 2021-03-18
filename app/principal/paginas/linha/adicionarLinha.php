<main>
  <section>
    <a name="voltar" href="../../../index.php">
    			<button  class="btn btn-success">Voltar</button>
    </a>

    <form method="post">
  		<div class="form-group">
  			<label>Nome da Linha</label><br>
  			<input type="text" class="form-control" name="nome" required value="<?=$obLinha->nome?>">
  		</div>

  		<div class="form-group mt-2">
  			<button type="submit" name="adicionar" class="btn btn-success">Adicionar</button>
  		</div>

  	</form>
  </section>
