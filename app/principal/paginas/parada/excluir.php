<main>

	<br>
	<h2>Excluir Parada</h2>

	<form method="post">

		<div class="form-group">
			<p>Você deseja realmente excluir o Veiculo <strong><?=$obParada->nome?></strong>?</p>
		</div>

		<div class="form-group">

				<a href="listar.php">
					<button type="button" class="btn btn-success">Cancelar</button><button type="submit" name="excluir" class="btn btn-danger">Excluir</button>
				</a>

		</div>

	</form>

</main>
