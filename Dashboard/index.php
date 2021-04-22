<?php include('config.php'); ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH; ?>css/style.css">
    <title>DashBoard</title>
</head>
<body>
    <div class="sidebar">
        <div class="topo">
            <h2>MENU</h2>
        </div><!--topo-->
        <nav class="menu">
            <ul>
                <li><i class="fab fa-line"></i><a href="<?php echo INCLUDE_PATH ?>home"> Linhas</a></li>
                <li><i class="fas fa-bus"></i><a href="<?php echo INCLUDE_PATH; ?>posicoes"> Posições dos Veículos</a></li>
                <li><i class="fas fa-stop-circle"></i><a href="<?php echo INCLUDE_PATH ?>paradas"> Paradas</a></li>
                <li><i class="fas fa-clock"></i><a href="#"> Previsão de Chegada</a></li>
            </ul>
        </nav><!--menu-->
        <div class="loggout">
            <i class="fas fa-power-off"></i>
        </div>
    </div><!--sidebar-->
    <div class="sidebar-mobile hide">
        <div class="topo">
            <h2>MENU</h2>
        </div><!--topo-->
        <div class="close-menu">
            <i id="close" class="fas fa-times"></i>
        </div>
        <nav class="menu">
            <ul>
                <li><i class="fab fa-line"></i><a href=""> Linhas</a></li>
                <li><i class="fas fa-bus"></i><a href="<?php echo INCLUDE_PATH; ?>posicoes"> Posições dos Veículos</a></li>
                <li><i class="fas fa-stop-circle"></i><a href="<?php echo INCLUDE_PATH ?>paradas"> Paradas</a></li>
                <li><i class="fas fa-clock"></i><a href="#"> Previsão de Chegada</a></li>
            </ul>
        </nav><!--menu-->
        <div class="loggout">
            <i class="fas fa-power-off"></i>
        </div>
    </div><!--sidebar-->

<!--------------FIM DA SIDEBAR----------------->

<div class="content">
    <header>
        <div class="logo-menu">
            <i id="open-menu" class="fas fa-bars"></i>
        </div><!--logo-menu-->
        <div class="name-painel">
            <p>API OLHO VIVO</p>
        </div><!--name-painel-->
 
    </header>
    
    <?php
        // ESTE CODIGO SERVE PARA NÃO PODER REPITIR O HTML

        $url = isset($_GET['url']) ? $_GET['url'] : 'home';

        if(file_exists('pages/'.$url.'.php')){
            
            include('pages/'.$url.'.php');

        } else{
            include('pages/404.php');
           }
          
    ?>
</div><!--content-->

<script src="<?php echo INCLUDE_PATH; ?>js/controller/Main.js"></script>
<script src="<?php echo INCLUDE_PATH; ?>js/index.js"></script>
<script src="https://kit.fontawesome.com/8debdb91c9.js" crossorigin="anonymous"></script>
</body>
</html>