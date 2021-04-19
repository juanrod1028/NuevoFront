var direccion = "/cgi-bin/NuevoBack";

/**
 * Función que obtiene el valor de una cookie
 * @param {*} cname 
 */
 function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
/**
 * Función que establece una cookie
 * @param {*} cname 
 * @param {*} cvalue 
 * @param {*} exdays 
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Función que elimina una cookie por el nombre
 * @param {*} name 
 */
function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
/**
 * Función que elimina todas las cookies 
 */
function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

/**
 * 
 * @param {string} valor 
 */
 function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(valor)) {
      return true;
    } else {
      return false;
    }
} 

function registrarUsuario(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/register.py',
        data: obj,
        dataType: "json",
        success: function(rta) {
            response=JSON.parse(rta);
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/NuevoFront/catalogo.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 

}
//xd metodo ajax para ingresar un usuario
function loginUsuario(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/login.py',
        data: obj,
        dataType: "json",
        success: function(rta) {
            response=JSON.parse(rta);
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/NuevoFront/catalogo.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 
}

function registrarAdmin(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/registerAdmin.py',
        data: obj,
        dataType: "json",
        success: function(rta) {
            response=JSON.parse(rta);
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/NuevoFront/catalogo.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 

}

function crearProtuducto(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Producto creado exitosamente")
            $(location).attr('href','/NuevoFront/catalogo.html')
        },
        error: function(response){
            console.log("Error al crear producto")
            console.log(JSON.stringify(response))
        }
    }); 
}

function actualizarProducto(obj){
    $.ajax({
        method: 'PUT',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Producto actualizado exitosamente")
            $(location).attr('href','/NuevoFront/catalogo.html')
        },
        error: function(response){
            console.log("Error al actualizar producto ")
            console.log(JSON.stringify(response))
        }
    }); 
}

function eliminarProducto(obj){
    $.ajax({
        method: 'DELETE',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Producto eliminado exitosamente")
            $(location).attr('href','/NuevoFront/catalogo.html')
        },
        error: function(response){
            console.log("Error al eliminar producto")
            console.log(JSON.stringify(response))
        }
    });    
}