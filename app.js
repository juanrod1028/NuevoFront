const cards = document.getElementById('cards')
const items = document.getElementById("items")
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment()
let x
let carrito = {}
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        pintarCarrito()
    }
})

cards.addEventListener("click", e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnAccion(e)
})


const fetchData = async () => {
    try {
        const res = await fetch("/NuevoFront/Front - copiadatos.json")
        const data = await res.json()
        const res2 = await fetch("NuevoFront/datoscantidad.json")
        const data2 = await res2.json()
        console.log(data)
        pintarCards(data)
        x = data2
        console.log(x)

    } catch (error) {
        console.log(error)
    }
}


const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.title
        templateCard.querySelector("p").textContent = producto.precio
        templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector(".btn-dark").dataset.id = producto.id
        templateCard.querySelector("h6").textContent=producto.categoria
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    cards.appendChild(fragment)
}

const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains("btn-dark"))
    if (e.target.classList.contains("btn-dark")) {
        //console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrito = objeto => {
    //console.log(objeto)
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        categoria: objeto.querySelector("h6").textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    //console.log(carrito)
    pintarCarrito()
}
const pintarCarrito = () => {
    //console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem("carrito", JSON.stringify(carrito))
}
const pintarFooter = () => {
    footer.innerHTML = ""
    if (Object.keys(carrito).length == 0) {
        footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío!</th>'
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
    templateFooter.querySelectorAll("td")[0].textContent = nCantidad
    templateFooter.querySelector("span").textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById("vaciar-carrito")
    btnVaciar.addEventListener("click", () => {
        carrito = {}
        pintarCarrito()
    })

    const btn = document.getElementById("btn")
    btn.addEventListener("click", () => {
        if (nCantidad>0) {
            carrito = {}
            pintarCarrito()
            Swal.fire({icon: 'success', title: 'Su compra a sido exitosa :D', showConfirmButton: false, timer: 1500})
            setTimeout(function() {
                window.location.href = window.location.href;
            }, 1000);
            
        }else{
            console.log('Entro al else')
            Swal.fire({icon: 'error', title: 'Oops...', text: 'Debe agregar productos al carrito para comprar'})
            console.log(carrito)   
        }
    })
    
}


const btnAccion = (e,data) => {
    if (e.target.classList.contains("btn-info")) {
        carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        
        if (x[parseInt(producto.categoria)-1].cantidad > producto.cantidad) {
            producto.cantidad++
            carrito[e.target.dataset.id] = { ...producto }
            pintarCarrito()
        } else {
            Swal.fire({
                title: '<strong>Se excedio lo disponible</strong>',
                icon: 'info',
                
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                   
              })
        }

    }
    if (e.target.classList.contains("btn-danger")) {
        carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad == 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }

}




