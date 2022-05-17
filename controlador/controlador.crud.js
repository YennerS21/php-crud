//FUNCIONALIDAD PARA MOSTRAR LOS REGISTROS
const open = document.addEventListener('DOMContentLoaded', ()=>{
    
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnEdit');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');

    btnCreate.hidden=false;
    btnEdit.hidden=true;
    btnDelete.hidden=true;
    btnCancel.hidden=false;
    
    //Mostrar personas registradas
    read();
    
});

function read(){
    fetch('controlador/controlador.read.php')
    .then((resp)=>resp.json())
    .then((data)=>{
        
        if (data!==null) {
            let tabla ='';
            for(i in data){
                tabla += '<tr>';
                tabla +=    '<td>'+data[i].id+'</td>';
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
    var btnEdit =document.getElementById('btnEdit');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=true;
    btnEdit.hidden=false;
    btnDelete.hidden=true;
    btnCancel.hidden=false;

    //Recuperamos los datos del registro a modificar

    var fila = e.target.parentNode.parentNode;
    var dataUp =
    {
        id: fila.firstElementChild.innerHTML,
        name: fila.children[1].innerHTML,
        email: fila.children[2].innerHTML
    };

    //Cargamos el formulario con los datos listos para ser modificados
    document.getElementById('numID').value=dataUp.id;
    document.getElementById('txtName').value =dataUp.name;
    document.getElementById('txtEmail').value =dataUp.email;

});

var save = document.getElementById('btnEdit');
save.addEventListener('click', update);

function update() {
    alert("vamos a actualizar un registro");
    var formulario = document.getElementById('frmDatos');
    var datos = new FormData(formulario);
    console.log(datos);
    fetch('controlador/controlador.update.php',
    {
        method: "POST",
        body: datos
    })
    .then(res => res.json())
    .then(data => {console.log(data);})
    .catch(error => console.log(error))
}


//FUNCIONALIDAD PARA INSERTAR

var create = document.getElementById('btnCreate');
create.addEventListener('click', insert);

//Arreglar
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
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnEdit');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=true;
    btnEdit.hidden=true;
    btnDelete.hidden=false;
    btnCancel.hidden=false;
    //Recuperamos los datos del registro a modificar

    var fila = e.target.parentNode.parentNode;
    var dataUp =
    {
        id: fila.firstElementChild.innerHTML,
        name: fila.children[1].innerHTML,
        email: fila.children[2].innerHTML
    };

    //Cargamos el formulario con los datos listos para ser modificados
    document.getElementById('numID').value=dataUp.id;
    document.getElementById('txtName').value =dataUp.name;
    document.getElementById('txtEmail').value =dataUp.email;
})

const eliminar = document.getElementById('btnDelete');
eliminar.addEventListener('click', eliminate)
function eliminate() {
    var formulario = document.getElementById('frmDatos');
    var datos = new FormData(formulario);

    fetch('controlador/controlador.delete.php',
    {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data=>{console.log(data);})
    .catch(error=>{console.log(error);})
}

//
const cancel=document.getElementById('btnCancel');

cancel.addEventListener('click', cancelar);

function cancelar() {
    var btnCreate =document.getElementById('btnCreate');
    var btnEdit =document.getElementById('btnEdit');
    var btnDelete =document.getElementById('btnDelete');
    var btnCancel =document.getElementById('btnCancel');
    btnCreate.hidden=false;
    btnEdit.hidden=true;
    btnDelete.hidden=true;
    btnCancel.hidden=false;
} 