//FUNCIONALIDAD PARA MOSTRAR LOS REGISTROS
const open = document.addEventListener('DOMContentLoaded', ()=>{
    //Mostrar personas registradas
    read();
    //Configuracion de botones inicial
    configurarBotonFormulario('inicio');
    
});
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
    configurarBotonFormulario('editar')

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
//FUNCIONALIDAD PARA INSERTAR
var create = document.getElementById('btnCreate');
create.addEventListener('click', insert);
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
    configurarBotonFormulario('eliminar')
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
});
const eliminar = document.getElementById('btnDelete');
eliminar.addEventListener('click', eliminate);
//
const cancel=document.getElementById('btnCancel');
cancel.addEventListener('click', cancelar);