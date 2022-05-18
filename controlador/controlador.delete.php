<?php

    // 1. Recibir datos que envian por el formulario de registro
    $id   = isset($_POST['id'])  ? trim($_POST['id']) : false;
    // 2. Verificar si los datos son correctos para ingresarlos a la base de datos
    if (!is_numeric($id) || empty($id) || preg_match("/[Aa-Zz]/", $id)) {
        $fails['id'] = "El id del registro que intenta borrar no es numerico/correcto";
    }
    echo $id;
    // 3. Eliminamos el registro segun el id
    if (count($fails)!==0) {
        var_dump($fails);
        die();
    }else{
        include '../crud.php';
        $obj_crud = new Crud();
        $obj_crud->delete($id);
    } 
?>