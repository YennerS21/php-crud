<?php

    include_once "C:\Apache24\htdocs\crud_php-\crud.php";

    $id = $_POST['numID'];

    if ($id!=0) {
        $objCrud = new Crud();
        $objCrud->delete($id);
    }
    


?>