//Recoge los datos de Registrar.html y los manda a register.py
$("#btnDonar").click(function(e){
    e.preventDefault();
    var precio=$("#prec").val();
    var id=$("#id").val();
    var name=$("#name").val();
    var imagen=$("#image").val();
    var categoria=$("#categ").val();

    var obj={
        precio: precio,
        id: id,
        nombre: name,
        imagen: imagen,
        categoria: categoria
    }  
    donarProductoo(obj)

}
);