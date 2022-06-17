
let fragmento = ""
let divVacio = document.querySelector(".carroVacio")
let divCarrito = document.querySelector(".articulosAniadidos")
let c3 = 0
let vacio = false
let itemsEnCarro = []
let total = [0, 0]
let buyBtn=document.querySelector(".btn_order")

let bolsita = document.getElementById("articulosEnCarro")
const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: '/assets/img/caffee_4.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: '/assets/img/caffee_4.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: '/assets/img/caffee_4.png',
    category: 'sweatshirts',
    quantity: 20
  },
  {
    id: 4,
    name: 'Sweatshirts',
    price: 30.00,
    image: '/assets/img/caffee_4.png',
    category: 'sweatshirts',
    quantity: 10
  }
]
let categoria = [
  {
    name: "Show all",
    cantidad: 4,
  },
  {
    name: "Hoodies",
    cantidad: 1,
  }, {
    name: "Shirts",
    cantidad: 1,
  }, {
    name: "Sweatshirts",
    cantidad: 2,
  }
]
let descarga = JSON.parse(window.localStorage.getItem("arreglo"))
let descargaTotal = JSON.parse(window.localStorage.getItem("total"))
if (descarga !== null) {
  itemsEnCarro = descarga

}
if (descargaTotal !== null) {
  bolsita.textContent = descargaTotal[0]

}


 

let c = 0
let categoriaLi = document.querySelector(".categoria")
categoria.forEach(elemento => {
  fragmento += `<li>
<h3 class="liCategoria" data-n=${c} onclick="clickFilter(${c})">${elemento.name}</h3>
<span>${elemento.cantidad} products</span></li>`
  c++
})
categoriaLi.innerHTML = fragmento

 
fragmento = ""
let divAniadir = document.querySelector(".productos")
let c2 = 0
items.forEach(element => {
  fragmento += `<div>
    <div class="imagen"><img src="${element.image}" alt=""></div>
    <button data.n="${c2}" onclick="carrito(${c2})" class"aniadir">+</button><br><span class="texto-medio">$${element.price} </span><span class="texto-bajo">| Stock: ${element.quantity}</span><br><span class="texto-medio">${element.name}</span>
</div>`
  c2++
})
divAniadir.innerHTML = fragmento
 
function clickFilter(id) {
  filtro = document.getElementsByClassName("liCategoria")
  filtrar = filtro[id].textContent
  let aux = items.filter(articulo => {
    let conn = true
    if (id === 0) {
      conn = true
    } else { conn = articulo.name === filtrar }
    return conn
  })
 
  fragmento = ""
  aux.forEach(element => {
    fragmento += `<div>
      <div class="imagen"><img src="${element.image}" alt=""></div>
      <button onclick="carrito(${element.id-1})" class="aniadir">+</button><br><span class="texto-medio">$${element.price} </span><span class="texto-bajo">| Stock: ${element.quantity}</span><br><span class="texto-medio">${element.name}</span>
  </div>`
  })
  divAniadir.innerHTML = fragmento

}
 
let carro = document.getElementById("carro")
let divCarro = document.querySelector(".carroInactivo")

carro.addEventListener("click", () => {

  divCarro.classList.add("carrito")
  if (itemsEnCarro[0] !== undefined && vacio === false) {
    //desaparecer el div
    divVacio.classList.add("carroVacioNone")
    vacio = true
    if (itemsEnCarro !== null) {
      imprimirArray(itemsEnCarro) 
    }

  }
})

 
let x = document.querySelector(".carroInactivo>span")
x.addEventListener("click", () => {
  divCarro.classList.remove("carrito")
})

 


function carrito(id) {
  
   
    let aux = {
      id: id,
      idp: id,
      name: items[id].name,
      price: items[id].price,
      image: items[id].image,
      category: items[id].category,
      quantity: items[id].quantity,
      cantidad: 1,
    }
    itemsEnCarro.push(aux)
    itemsEnCarro[itemsEnCarro.length - 1].id = itemsEnCarro.length - 1
    let a = 0
    let pos = []
    for (i = 0; i <= itemsEnCarro.length - 1; i++) {
      a = 0
      pos = []
      for (j = 0; j <= itemsEnCarro.length - 1; j++) {
        if (itemsEnCarro[i].idp === itemsEnCarro[j].idp) {//es id es la posicion
          a++
          if (a >= 2) { pos.push(j) }
        }
      }
    
      for (k = pos.length - 1; k >= 0; k--) {
  
        itemsEnCarro.splice(pos[k], 1)
        itemsEnCarro[i].cantidad++
      }
    }
  
    

     ]
          if (vacio === false) {
            divVacio.classList.add("carroVacioNone")
            vacio = true
          }
        
        
      
          imprimirArray(itemsEnCarro)
  
  
   
  }
 
function clickMasMenos(id, boo) {
  //modificar en el array la cantidad
    if (boo === true) {
      itemsEnCarro[id].cantidad++
    } else { itemsEnCarro[id].cantidad-- }


   
    imprimirArray(itemsEnCarro)
  



}
function Eliminar(id) {
 
  let posItem = itemsEnCarro[id].idp
  itemsEnCarro.splice(id, 1)
  
  for (i = id; i <= itemsEnCarro.length - 1; i++) {
    itemsEnCarro[i].id--
  }
 
  if (itemsEnCarro[0] === undefined) {
    divVacio.classList.remove("carroVacioNone")
    vacio = false
    buyBtn.classList.add("btnVacio")
  }
}


function imprimirArray(arreglo) {
 



  fragmento = ""
  arreglo.forEach(elements => {
    fragmento += `
    <div class="tarjetaProducto">
    <img src="${elements.image}" alt="">
    <div>
        <h3>${elements.name}</h3>
        <span class="gris">Stock: ${elements.quantity} |</span><span class="rojo"> $${elements.price}</span><br>
        <span class="rojo texto-medio">Subtotal: $${elements.cantidad * elements.price}</span>
        <div><span class="botonUnidades" onclick="clickMasMenos(${elements.id},false)">-</span><span class="texto-medio">${elements.cantidad} units</span><span class="botonUnidades" onclick="clickMasMenos(${elements.id},true)">+</span><i onclick="Eliminar(${elements.id})"><img src="/assets/img/remove.png" height="20px"  alt=""></i></div>
    </div>
    </div>`
  })
  divCarrito.innerHTML = fragmento
 
  let subir = JSON.stringify(arreglo)
  window.localStorage.setItem("arreglo", subir)

 
  total[0] = 0
  total[1] = 0
  for (i = 0; i <= arreglo.length - 1; i++) {
    total[0] = total[0] + arreglo[i].cantidad
    total[1] = total[1] + arreglo[i].cantidad * arreglo[i].price
  }

 
  fragmento = ""
  fragmento = `
  <span id="items">${total[0]} items</span><span id="precio">$${total[1]}</span>`
  let divTotal = document.querySelector(".total")
  divTotal.innerHTML = fragmento
 
  window.localStorage.setItem("total", JSON.stringify(total))

  bolsita.textContent = total[0]


buyBtn.classList.remove("btnVacio")
}
function btn_order(){
  itemsEnCarro=[]
  imprimirArray(itemsEnCarro)
  window.alert("Gracias por su compra")

  if (itemsEnCarro[0] === undefined) {
    divVacio.classList.remove("carroVacioNone")
    vacio = false
  }
  
  buyBtn.classList.add("btnVacio")
}