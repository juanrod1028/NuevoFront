//Recoge los datos de Login.html y los manda a login.py
$("#Ingresar").click(function(e){
    e.preventDefault();
    var username = $("#usr").val();
    var password = $("#pass").val();
    var obj = { 
        nombre: username,
        contraseña: password
    }
    loginUsuario(obj);
});