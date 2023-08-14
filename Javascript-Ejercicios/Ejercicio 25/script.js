function getFormValores(){
    const name = document.querySelector('input[name="nombre"]').value;
    const lastName = document.querySelector('input[name="apellido"]').value;
    alert(name + " " + lastName);
}