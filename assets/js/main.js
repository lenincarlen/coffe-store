 

let items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/img/caffe_1.jpg',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/img/caffe_3.jpg',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/img/caffe_3.jpg',
    category: 'sweatshirts',
    quantity: 20
  }
]


let cartToggle = document.getElementById('cart-shop')
let cart = document.getElementById('cart')
let cartClose = document.getElementById('cart-close')
let  productsContainer = document.querySelector('#products .products__content')
let sections = document.querySelectorAll('section[id]')
let total = carrito.methods.getTotal()
let cartCount = document.getElementById('cart-count')
let itemsCount = document.getElementById('items-count')
let minusItems = document.querySelectorAll('.minus')
let plusItems = document.querySelectorAll('.plus')
let deleteButtons = document.querySelectorAll('.cart__amount-trash')
let totalContainer = document.getElementById('cart-total')
let checkoutButton = document.getElementById('cart-checkout')
 let carrito = { 
    data: [],
    methods: {
      add: function(product) {
        this.data.push(product)
      }
    }
  }
  init()
  cartToggle.addEventListener('click', () => {
    cart.classList.toggle('cart--open')
  }
  )
  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart--open') // cierra el carrito
  }
  )
  productsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__amount-trash')) {
      let id = e.target.dataset.id
      carrito.methods.remove(id)
      e.target.parentElement.parentElement.remove()
      updateCart()
    } else if (e.target.classList.contains('plus')) {
      let id = e.target.dataset.id
      carrito.methods.add(id)
      updateCart()
    } else if (e.target.classList.contains('minus')) {
      let id = e.target.dataset.id
      carrito.methods.remove(id)
      updateCart()
    } else if (e.target.classList.contains('cart__amount-input')) {
      let id = e.target.dataset.id
      carrito.methods.update(id, e.target.value)
      updateCart()
    } else if (e.target.classList.contains('cart__amount-plus')) {
      let id = e.target.dataset.id
      carrito.methods.add(id)
      updateCart()
    } else if (e.target.classList.contains('cart__amount-minus')) {
      let id = e.target.dataset.id
      carrito.methods.remove(id)
      updateCart()
    
    }
  } 

  )
  function updateCart() {
    let cartItems = carrito.methods.getAll()
    let total = carrito.methods.getTotal()
    cartCount.innerHTML = cartItems.length
    itemsCount.innerHTML = cartItems.length
    totalContainer.innerHTML = total
    if (cartItems.length > 0) {
      cart.classList.add('cart--open')
    } else {
      cart.classList.remove('cart--open')
    } 
  }
  function mostrarCarrito() {
    let cartItems = carrito.methods.getAll()
    let total = carrito.methods.getTotal()
    cartCount.innerHTML = cartItems.length
    itemsCount.innerHTML = cartItems.length
    totalContainer.innerHTML = total
    if (cartItems.length > 0) {
      cart.classList.add('cart--open')
    } else {
      cart.classList.remove('cart--open')
    }
  }
  function actualizarCantidad() {
    let cartItems = carrito.methods.getAll()
    let total = carrito.methods.getTotal()
    cartCount.innerHTML = cartItems.length
    itemsCount.innerHTML = cartItems.length
    totalContainer.innerHTML = total
    if (cartItems.length > 0) {
      cart.classList.add('cart--open')
    } else {
      cart.classList.remove('cart--open')
    }
  }
  function numberToCurrency(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
  function init() {
    mostrarCarrito()
    actualizarCantidad()
  }
  function mostrarProductos() {
    let html = ''
    products.forEach(product => {
      html += `
      <div class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__info">
          <h2 class="product__name">${product.name}</h2>
          <h3 class="product__price">${numberToCurrency(product.price)}</h3>
          <div class="product__amount">
            <button class="product__amount-minus">-</button>
            <input class="product__amount-input" type="number" value="1">
            <button class="product__amount-plus">+</button>
          </div>
          <button class="product__add" data-id="${product.id}">Agregar</button>
        </div>
      </div>
      `
    })
    productsContainer.innerHTML = html
  }
  function mostrarCategorias() {
    let html = ''
    products.forEach(product => {
      html += `
      <div class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__info">
          <h2 class="product__name">${product.name}</h2>
          <h3 class="product__price">${numberToCurrency(product.price)}</h3>
          <div class="product__amount">
            <button class="product__amount-minus">-</button>
            <input class="product__amount-input" type="number" value="1">
            <button class="product__amount-plus">+</button>
          </div>
          <button class="product__add" data-id="${product.id}">Agregar</button>
        </div>
      </div>
      `
    })
    productsContainer.innerHTML = html
  }
  

 Function mostrarProductos() {
    let html = ''
    products.forEach(product => { 
      html += `
      <div class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__info">
          <h2 class="product__name">${product.name}</h2>
          <h3 class="product__price">${numberToCurrency(product.price)}</h3>
          <div class="product__amount">
            <button class="product__amount-minus">-</button>
            <input class="product__amount-input" type="number" value="1">
            <button class="product__amount-plus">+</button>
          </div>
          <button class="product__add" data-id="${product.id}">Agregar</button>
        </div>
      </div>
      `
    })
    productsContainer.innerHTML = html  

  }
 