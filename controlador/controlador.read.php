<?php

    include_once "../crud.php";//Incluye una vez en tu archivo

    $objCrud = new Crud();
    error_reporting(1);

    $ver_personas = $objCrud->read();

    
    if($ver_personas->estado==false){
        echo "BAD JOB  !";
        print_r($ver_personas->mensaje);
    }else{
        //header('Location: index.php');
        echo json_encode($ver_personas->datos);
    }
    die();
    
?>