<?php
    
    // 1. Recibir datos que envian por el formulario de registro
    $name   = isset($_POST['txtName'])  ? trim($_POST['txtName']) : false;
    $phone  = isset($_POST['txtPhone']) ? $_POST['txtPhone'] : false;
    $email  = isset($_POST['txtEmail']) ? trim($_POST['txtEmail']) : false;
    //array para capturar errores
    $fails = array();
    // 2. Verificar si los datos son correctos para ingresarlos a la base de datos
    if (is_numeric($name) || empty($name) || preg_match("/[0-9]/", $name)) {
        $fails['name'] = "Este campo es obligatorio para registrarse, ademas no se permite ingresar numeros.";
    }
    if (!is_numeric($phone) || empty($phone) || preg_match("/[Aa-Zz]/", $phone)) {
        $fails['phone']= "Este campo es obligatorio para registrarse. Ingrese solo numeros";
    }
    if (!empty($email)) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $fails['email'] = "Correo invalido";
        } 
    }
    // 3. Insertar datos
    if (count($fails)!==0) {
        var_dump($fails);
        die();
    }else{
        include_once '../modelo/crud.php';
        $obj_crud = new Crud();
        $res = $obj_crud->create($name, $phone, $email);
    }
    // 4. Enviar una respuesta al usuario
    var_dump($res);
?>   