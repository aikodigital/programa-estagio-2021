<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paradas</title>
</head>
<body>
<div class="panel">
    <h2>Pontos de paradas</h2>
</div><!--panel-->

<div class="insert">
    <form id="formulario" action="" method="post">
        <p id="error"></p>
            <div class="form-group">
                <label for="estacao">Digite o nome da parada ou o endereço de localização:</label>
                <input type="text" id="estacao">
            </div><!--form-group-->
            <div class="form-group">
                <input type="submit" value="ENVIAR">
            </div><!--form-group-->
        </form>
</div><!--insert-->
</body>
</html>