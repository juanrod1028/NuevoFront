$("#Registrar").click(function(e){
    e.preventDefault();
    var username = $("#usr").val();
    var password = $("#pass").val();
    var obj = { 
        nombre: username,
        contraseña: password
    }
    registrarUsuario(obj);
});