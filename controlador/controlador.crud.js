//FUNCIONALIDAD PARA MOSTRAR LOS REGISTROS
const open = document.addEventListener('DOMContentLoaded', ()=>{
    //Mostrar personas registradas
    read();
    //Configuracion de botones inicial
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnUpdate');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=false;
    btnEdit.hidden=true;
    btnDelete.hidden=true;
    btnCancel.hidden=false;
});
function read(){

fetch('controlador/controlador.read.php')
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
    .catch(function(error) {
        console.log(error);
    })
    .catch((err)=>{console.log(err)})
}
//FUNCIONALIDAD PARA EDITAR REGISTRO
//Funcion que imita el evento onclick
const edit = (elemento, evento, selector, handler) => {
    elemento.addEventListener(evento, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
};
edit(document, 'click', '.btnEdit', e=>{
    //Ocultar y mostrar botones para el procedimiento de edicion
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnUpdate');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=true;
    btnEdit.hidden=false;
    btnDelete.hidden=true;
    btnCancel.hidden=false;

    //Recuperamos los datos del registro a modificar
    let fila = e.target.parentNode.parentNode;
    var dataUp =
    {
        id: fila.firstElementChild.innerHTML,
        name: fila.children[1].innerHTML,
        phone: fila.children[2].innerHTML,
        email: fila.children[3].innerHTML
    };

    //Cargamos el formulario con los datos listos para ser modificados
    document.getElementById('id').value =dataUp.id;
    document.getElementById('txtName').value =dataUp.name;
    document.getElementById('txtPhone').value=dataUp.phone;
    document.getElementById('txtEmail').value =dataUp.email;

});
var save = document.getElementById('btnUpdate');
save.addEventListener('click', update);
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


//FUNCIONALIDAD PARA INSERTAR
var create = document.getElementById('btnCreate');
create.addEventListener('click', insert);

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

//FUNCIONALIDAD PARA ELIMINAR REGISTRO (CAMBIAR EL ESTADO DE TRUE A FALSE)
//Funcion que imita el evento onclick
const delete_id = (elemento, evento, selector, handler) => {
    elemento.addEventListener(evento, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
};

delete_id(document,'click', '.btnDelete', e=>
{
    //Configuracion de botones para eliminar
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnUpdate');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=true;
    btnEdit.hidden=true;
    btnDelete.hidden=false;
    btnCancel.hidden=false;
    //Recuperamos los datos del registro a eliminar
    var fila = e.target.parentNode.parentNode;
    var dataUp =
    {
        id: fila.firstElementChild.innerHTML,
        name: fila.children[1].innerHTML,
        phone: fila.children[2].innerHTML,
        email: fila.children[3].innerHTML
    };

    //Cargamos el formulario con los datos listos para ser eliminados
    document.getElementById('id').value =dataUp.id;
    document.getElementById('txtName').value =dataUp.name;
    document.getElementById('txtPhone').value=dataUp.phone;
    document.getElementById('txtEmail').value =dataUp.email;
})

const eliminar = document.getElementById('btnDelete');
eliminar.addEventListener('click', eliminate);

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

//
const cancel=document.getElementById('btnCancel');

cancel.addEventListener('click', cancelar);

function cancelar() {
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnUpdate');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=true;
    btnEdit.hidden=false;
    btnDelete.hidden=false;
    btnCancel.hidden=false;
} 