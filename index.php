<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">



    <title>Create, read, update, delete</title>
</head>
<body>
    <div class="container">
        <h1 class="logo">
            Create, read, update, delete <span>CRUD</span>
        </h1>
        
        <div class="target-container">
            <div class="target-form">
                <form id="frmDatos">
                    <span>Form register</span>
                    <p hidden>
                        <input type="text" name="id" id="id">
                    </p>
                    <p>
                        <label for="">Name</label>
                        <input type="text" name="txtName" id="txtName" placeholder="Ej: Carlos">
                    </p>
                    <p>
                        <label for="">Phone</label>
                        <input type="number" name="txtPhone" id="txtPhone" placeholder="Ej: 123">
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" name="txtEmail" id="txtEmail" placeholder="Ej: carlos@ejemplo.com">
                    </p>
                    <p>
                        <button type="button" id="btnCreate">Create</button>
                        <button type="button" id="btnUpdate" >Edit</button>
                        <button type="button" id="btnDelete" >Delete</button>
                        <button type="reset" id="btnCancel" >Cancel</button>
                    </p>
                </form>
            </div>

            <div class="target-info">
                <h1>Table records</h1>
                <table id="table-records">
                    <tr>
                        <th hidden>id</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th colspan="2">options</th>
                    </tr>
                    <tbody id="people">
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    <script src="controlador/controlador.crud.js"></script>
</body>

</html>

