<main>
  <section>
    <a name="voltar" href="../../../index.php">
    			<button  class="btn btn-success">Voltar</button>
    </a>
  </section>

  <form method="post">
		<div class="form-group">
			<label>Nome do Veiculo</label><br>
			<input type="text" class="form-control" name="nome" required value="<?=$obVeiculo->nome?>">
		</div>

		<div class="form-group ">
			<label>Modelo</label>
      <input type="text" class="form-control" name="modelo" required value="<?=$obVeiculo->modelo?>">
		</div>

    <div class="form-group ">
			<label>Latitude</label>
      <input type="text" class="form-control" name="latitude" required value="<?=$obPosicaoVeiculo->latitude?>">
		</div>

    <div class="form-group ">
			<label>Longitude</label>
      <input type="text" class="form-control" name="longitude" required value="<?=$obPosicaoVeiculo->longitude?>">
		</div>

    <div class="form-group ">
			<label>Linha ID</label>
      <input type="text" class="form-control" name="linhaId" required value="<?=$obVeiculo->linhaId?>">
		</div>

		<div class="form-group mt-2">
			<button type="submit" name="adicionar" class="btn btn-success">Adicionar</button>
		</div>

	</form>

</main>
