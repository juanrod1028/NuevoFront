//Recoge los datos de Registrar.html y los manda a register.py
$("#Registrar").click(function(e){
    e.preventDefault();
    var username = $("#usr").val();
    var password = $("#pass").val();
    var direccion = $("#direc").val();
    var correo = $("#email").val();
    var identificacion = $("#id").val();
    var obj = { 
        nombre: username,
        contraseña: password,
        direc: direccion,
        email: correo,
        id: identificacion
    }
    registrarUsuario(obj);
});