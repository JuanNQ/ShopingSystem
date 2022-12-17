const navEmail = document.querySelector(".navEmail");
const container = document.querySelector(".container");
const iconMenu = document.querySelector(".iconMenu");
const menu = document.querySelector(".menu");
const cartNavbar = document.querySelector(".cartNavbar");
const shopping = document.querySelector(".shopping");
const homeContainer = document.querySelector('.home-container');
const productDetail = document.querySelector('.productDetail');
const close = document.querySelector('.close');
// const img = document.querySelector(".img");
// const productDetail = document.querySelector('.productDetail');


navEmail.addEventListener('click',toggleDesktopMenu);
iconMenu.addEventListener('click',toggleMobileMenu);
cartNavbar.addEventListener('click',toggleShoping);
close.addEventListener('click', closeDetailProduct);
// img.addEventListener('click',toggleDetailProduct);

function toggleDesktopMenu(){
    container.classList.toggle('inactive');
    console.log(shopping.getAttribute('class','shopping inactive')==
    'shopping'?shopping.classList.toggle('inactive'):"no");
}

function toggleMobileMenu(){
    menu.classList.toggle('inactive');
    console.log(shopping.getAttribute('class','shopping inactive')==
    'shopping'?shopping.classList.toggle('inactive'):"no");
}

function toggleShoping(){
    shopping.classList.toggle('inactive');
    console.log(menu.getAttribute('class','menu inactive')==
    'menu'?menu.classList.toggle('inactive'):"no");
    console.log(container.getAttribute('class','container inactive')==
    'container'?container.classList.toggle('inactive'):"no");
    console.log(productDetail.getAttribute('class','productDetail inactive')==
    'productDetail'?productDetail.classList.toggle('inactive'):"no");
}

function showDetailProduct(){
    productDetail.classList.remove('inactive');
    console.log(shopping.getAttribute('class','shopping inactive')==
    'shopping'?shopping.classList.toggle('inactive'):"no");
}

function closeDetailProduct(){
    productDetail.classList.add('inactive');
}

const productList = [];

productList.push({
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike MTB",
    price: 1000,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike",
    price: 500,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike MTB",
    price: 1000,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike",
    price: 500,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike MTB",
    price: 1000,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike",
    price: 500,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike MTB",
    price: 1000,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike",
    price: 500,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike MTB",
    price: 1000,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike",
    price: 500,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike MTB",
    price: 1000,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});
productList.push({
    name: "Bike",
    price: 500,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
});

// console.log(productList);

function list(arr){

    for (products of arr) {
        const product = document.createElement('div');
        product.classList.add('product');
        
        const img = document.createElement('img');
        img.setAttribute('src',products.img);
        img.classList.add('img');
        img.addEventListener('click',showDetailProduct);
        
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('containerProduct');
        
        const inf = document.createElement('div');
        inf.classList.add('inf');
        
        const price = document.createElement('h1');
        price.classList.add('price');
        price.innerText = '$' + products.price;
        
        const description = document.createElement('p');
        description.classList.add('description');
        description.innerText = products.name;
        
        const car = document.createElement('figure');
        car.classList.add('car');
        
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src','./Icons/bt_add_to_cart.svg');
        
        car.appendChild(iconCart);
        
        inf.appendChild(price);
        inf.appendChild(description);
        
        containerProduct.appendChild(inf);
        containerProduct.appendChild(car);
        
        product.appendChild(img);
        product.appendChild(containerProduct);

        homeContainer.appendChild(product);
    }
}

list(productList);



