/** Botón de registro*/
$("#btnRegistrar").click(function(e){
    e.preventDefault();
    var username = $("#usr").val();
    var password = $("#pass").val();
    var passwordC=$("#passc").val();
    var direccion = $("#direc").val();
    var correo = $("#email").val();
    var correoc=$("#correoc").val();
    var identificacion = $("#id").val();
    var check=$("#check1").prop("checked");
    if (validarEmail(correo)){
        if(correo!==correoc){
            alert("Los correos no coinciden");
        }
        else {
            if (password!==passwordC){
                alert("Las contraseñas no coinciden");
            }else{
                if (!check){
                    alert("Debe aceptar las políticas de tratamiento de datos");
                }else{
                    var obj={
                        nombre: username,
                        contraseña: password,
                        direc: direccion,
                        id: identificacion,
                        email: correo,
                        telefono: telefono,
                    };
                    registrarUsuario(obj);
                }
            }
        } 
    }else{
        alert("Correo en formato incorrecto");
    }    
});

$("#btnRegistrarAdmin").click(function(e){
    e.preventDefault();
    var username = $("#usr").val();
    var password = $("#pass").val();
    var passwordC=$("#passc").val();
    var direccion = $("#direc").val();
    var identificacion = $("#id").val();
    var correo=$("#correo").val();
    var correoc=$("#correoc").val();
    var permisos=$("#permisos").val();
    var check=$("#check1").prop("checked");
    if (validarEmail(correo)){
        if(correo!==correoc){
            alert("Los correos no coinciden");
        }
        else {
            if (password!==passwordC){
                alert("Las contraseñas no coinciden");
            }else{
                if (!check){
                    alert("Debe aceptar las políticas de tratamiento de datos");
                }else{
                    var obj={
                        nombre: username,
                        contraseña: password,
                        email: correo,
                        direc: direccion,
                        id: identificacion,
                        permisos: permisos
                    };
                    registrarAdmin(obj);
                }
            }
        } 
    }else{
        alert("Correo en formato incorrecto");
    }   
});