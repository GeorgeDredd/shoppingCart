// Declare Variables
let body = document.querySelector('body');
let openCart = document.querySelector('.cart');
let quantity = document.querySelector('.quantity')
let total = document.querySelector('.total');
let closeCart = document.querySelector('.closeCart');
let productList = document.querySelector('.productList');
let cartList = document.querySelector('.cartList');


// Add Event listeners
openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
})

// Declare Products and store in array
// Array - Collection of multiple items that can be stored under a single variable name
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.JPG',
        price: 12000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.JPG',
        price: 12000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.JPG',
        price: 12000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.JPG',
        price: 12000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.JPG',
        price: 12000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.JPG',
        price: 12000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 7',
        image: '7.JPG',
        price: 12000
    },
    {
        id: 8,
        name: 'PRODUCT NAME 8',
        image: '8.JPG',
        price: 12000
    },
    {
        id: 9,
        name: 'PRODUCT NAME 9',
        image: '9.JPG',
        price: 12000
    },
    {
        id: 10,
        name: 'PRODUCT NAME 10',
        image: '10.JPG',
        price: 12000
    },
    {
        id: 11,
        name: 'PRODUCT NAME 11',
        image: '11.JPG',
        price: 12000
    },
    {
        id: 12,
        name: 'PRODUCT NAME 12',
        image: '12.JPG',
        price: 12000
    },
    
];


// Initialize Products
function loadProducts(){
    // value => objects consist of the products, while the key => index number
    // Loop through the items in the products array and create a new div for each individual products
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        // Template literals for string interpolation
        newDiv.innerHTML = `
            <img src="image/${value.image}" />
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add to Cart</button> 
        `;
        productList.appendChild(newDiv);
    })
}
loadProducts();



// Declare variable which is an empty array to add items to cart
let cartDiv = [];

function addToCart(key) {
    if(cartDiv[key] == null){
        // Assign individual products into cartDiv
        cartDiv[key] = products[key];
        cartDiv[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    cartList.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    // Loop through the items in the cartDiv array and create a new list for each individual products
    cartDiv.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;


        if(value != null) {
        let newDiv =  document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button class="minus" onclick="subQuantity(${key}, ${value.quantity - 1}, )">-</button>
                <div class="count">${value.quantity}</div>
                <button class="plus" onclick="addQuantity(${key}, ${value.quantity + 1})">+</button>      
            </div>
        `
        cartList.appendChild(newDiv);
    }
})
    total.innerText  = totalPrice.toLocaleString();
    quantity.innerText = count;
}



// let productsPrice = 0

 function subQuantity(key, quantity){
    if(quantity == 0) {
         delete cartDiv[key];
     }else {
         cartDiv[key].quantity = quantity;
         cartDiv[key].price = products[key].price / quantity;


        //  cartDiv[key].quantity = quantity;
        //  products[key].price -=  products[key].price;
        //  cartDiv[key].price -= products[key].price;
     }
     reloadCart();
 }

 function addQuantity(key, quantity){
    cartDiv[key].quantity = quantity;
    cartDiv[key].price = products[key].price * quantity;


    // cartDiv[key].quantity = quantity;
    // productsPrice = productsPrice + products[key].price;
    // cartDiv[key].price = productsPrice;

     reloadCart();
 }
