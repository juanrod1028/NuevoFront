//Recoge los datos de Login.html y los manda a login.py
$("#Ingresar").click(function(e){
    e.preventDefault();
    var username = $("#usr").val();
    var password = $("#pass").val();
    if(validarEmail(email)){
        var obj = { 
            nombre: username,
            contraseña: password
        }
        loginUsuario(obj);
    }else{
        alert("Formato de correo inválido") 
    }
});



