let btnCreate =document.getElementById('btnCreate');
let btnEdit =document.getElementById('btnUpdate');
let btnDelete =document.getElementById('btnDelete');
let btnCancel =document.getElementById('btnCancel');

function configurarBotonFormulario(btnActivar)
{
    console.log(btnActivar);

    btnActivar === 'inicio'     ? btnCreate.hidden=false    : btnCreate.hidden=true;    
    btnActivar === 'editar'     ? btnEdit.hidden=false      : btnEdit.hidden=true;    
    btnActivar === 'eliminar'   ? btnDelete.hidden=false    : btnDelete.hidden=true;    
    
}
function cancelar() {
    
    btnCreate.hidden=false;
    btnEdit.hidden=true;
    btnDelete.hidden=true;
    btnCancel.hidden=false;
} 