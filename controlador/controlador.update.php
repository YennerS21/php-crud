<?php

include_once "C:\Apache24\htdocs\crud_php-\crud.php";

$idUpdate = $_POST['numID'];
$name = $_POST['txtName'];
$email = $_POST['txtEmail'];
$objCrud = new Crud();


if (isset($idUpdate)) {
    $objCrud->update($idUpdate, $name, $email);
}else {
    echo "error al modificar el dato";
}

