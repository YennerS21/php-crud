//PARA INSERTAR
function insert() {
    var formulario = document.getElementById('frmDatos');
    var datos = new FormData(formulario);

    fetch('controlador/controlador.create.php',{
        method: 'POST',
        body: datos
    })
    .then(response => response.text())
    .then(data => read());
}
//PARA EDITAR
function update() {
    var formulario = document.getElementById('frmDatos');
    var datos = new FormData(formulario);
    fetch('controlador/controlador.update.php',
    {
        method: "POST",
        body: datos
    })
    .then(res => res.text())
    .then(data => {read();})
    .catch(error => console.log(error))
}
//PARA ELIMINAR
function eliminate() {
    var formulario = document.getElementById('frmDatos');
    var datos = new FormData(formulario);

    fetch('controlador/controlador.delete.php',
    {
        method: 'POST',
        body: datos
    })
    .then(res => res.text())
    .then(data=>{read();})
    .catch(error=>{console.log(error);})
}
//PARA Mostrar
function read(){
    fetch('../../controlador/controlador.read.php')
    .then((resp)=>resp.json())
    .then((data)=>{
            
            if (data!==null) {
                let tabla ='';
                for(i in data){
                    tabla += '<tr>';
                    tabla +=    '<td hidden>'+data[i].id+'</td>';
                    tabla +=    '<td>'+data[i].per_name+'</td>';
                    tabla +=    '<td>'+data[i].per_telefono+'</td>';
                    tabla +=    '<td>'+data[i].per_email+'</td>';
                    tabla +=    '<td><button class="btnEdit" data-id="'+data[i].id+'">EDIT</button></td>';
                    tabla +=    '<td><button class="btnDelete">DELETE</button></td>';
                    tabla += '</tr>';
                }
                people.innerHTML=tabla ;
            }else{
                console.log("mal");
            }
        })
        .catch((err)=>{console.log(err)})
    }