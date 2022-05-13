<?php

    include_once "../crud.php";

    //Validar espacios y tipos de datos
    // $name = $_POST['txtName']; 
    $name = 'puta'; 
    // $email = $_POST['txtEmail'];
    $email = 'barata';
    $objCrud = new Crud();


    if(isset($name)){
        header('Location: ../index.php');
        $objCrud->create($name, $email);
    }
    echo "error";
 ?>   