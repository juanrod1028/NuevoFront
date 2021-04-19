//Recoge los datos de Login.html y los manda a login.py
$("#Ingresar").click(function(e){
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#pass").val();
    var obj = { 
        correo: email,
        contraseña: password
    }
    loginUsuario(obj);
});



