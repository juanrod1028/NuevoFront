$("#btnAgregarProduc").click(function(e){
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
    crearProtuducto(obj)
}
);

$("#btnActualizarProduc").click(function(e){
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
    };
    actualizarProducto(obj)
}
);

$("#btnEliminarProduc").click(function(e){
    e.preventDefault();
    var idProducto=$("#id").val();
    var nombre=$("#nombre").val();
    var imagen=$("#imagen").val();
    var obj={
        id: idProducto
    };
    eliminarProducto(obj)
}
);