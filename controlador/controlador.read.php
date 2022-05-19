<?php

    include_once '../modelo/crud.php';//Incluye una vez en tu archivo

    $objCrud = new Crud();
    $ver_personas = $objCrud->read();

    
    if($ver_personas->estado==false){
        echo "BAD JOB  !";
        print_r($ver_personas->mensaje);
    }else{
        //header('Location: index.php');ç
        echo json_encode($ver_personas->datos);
    }
    
?>