/* Home page */

const productList = [];
const homeContainer = document.querySelector('.home-container');
var idImg = 0;
var idIcon = 0;

/* List of products */
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Ball",
    price: 40,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/18588637_1?wid=800&hei=800&qlt=70",
    information: "Official adidas ball",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Bike MTB",
    price: 1000,
    img: "https://pedalia.cc/wp-content/uploads/2018/03/2080600_2018_A_1_Procal_99_SL_RSL.jpg",
    information: "- Material: carbon - Changes: 7x3 - Rim: 29",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Bike",
    price: 500,
    img: "https://promart.vteximg.com.br/arquivos/ids/916327-1000-1000/image-b09f62ee402544cca8ff5cc91757f478.jpg?v=637552365049330000",
    information: "- Material: steel - Changes: 6x3 - Rim: 27",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Football Boots",
    price: 100,
    img: "https://solopeloteros.com/3599-large_default/nike-air-zoom-mercurial-vapor-15-elite-sg-pro-ac-metallic-cooper.jpg",
    information: "- Football Boots - Brand: Nike - Size: 42",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Soccer Gloves",
    price: 80,
    img: "https://www.arquerosperu.com/7372-home_default/guantes-rinat-meta-gk-spines-semi-infantil-gris-oxfordgris.jpg",
    information: "- Soccer Gloves - Brank: Oxford",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Cycling Helmet",
    price: 40,
    img: "https://promart.vteximg.com.br/arquivos/ids/6559387-1000-1000/image-d0485c35e2b54df5b3d908861782f71a.jpg?v=638007705666300000",
    information: "- Cycling Helmet - Brank: Cairbull",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Takes All",
    price: 10,
    img: "https://http2.mlstatic.com/D_NQ_NP_706566-MPE47800382161_102021-O.jpg",
    information: "- Takes All - Brank: Atom",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Shorts MMA",
    price: 30,
    img: "https://cdn.shopify.com/s/files/1/0075/4430/7812/products/ultra-bk2_400x.jpg?v=1668717319",
    information: "- Shorts MMA - Brank: Pride",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Mma Gloves",
    price: 40,
    img: "https://www.mideporte.pe/wp-content/uploads/2021/04/GUANTE-PARA-MMA-PROFESIONAL-UPPERCUT-BLACK-MIDEPORTE_01.png",
    information: "- Mma Gloves - Brank: Uppercut",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Swimming Goggles",
    price: 20,
    img: "https://www.mideporte.pe/wp-content/uploads/2021/11/LENTE-DE-NATACION-TORNEO-BL885H-GRIS.png",
    information: "- Swimming Goggles",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Swimming Cap",
    price: 18,
    img: "https://deportesonce.com.ar/wp-content/uploads/virtuemart/product/gorra-de-lycra-sporto-3.jpg",
    information: "- Swimming Cap - Brank: Porto",
});
productList.push({
    idImg: 'img'+idImg++,
    idIcon: 'iconCart'+idIcon++,
    name: "Surf Table",
    price: 500,
    img: "https://surf3.es/wp-content/uploads/2018/04/next-scooter-azul.jpg",
    information: "- Surf Table - Brank: Next",
});
listProducts(productList);

/* Product detail */
const productDetail = document.querySelector('.productDetail');
detailProductCreate();

/* Shoping cart */
const shopping = document.querySelector(".shopping");
const articles = document.querySelector('.articles');
cardCreate();

/* Querys */
const navEmail = document.querySelector(".navEmail");
const container = document.querySelector(".container");
const iconMenu = document.querySelector(".iconMenu");
const menu = document.querySelector(".menu");
const cartNavbar = document.querySelector(".cartNavbar");

/* Events */
navEmail.addEventListener('click',toggleDesktopMenu);
iconMenu.addEventListener('click',toggleMobileMenu);
cartNavbar.addEventListener('click',toggleShoping);


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

function showDetailProduct(numImg){
    filtroImg = productList.find(function(producto){
        return producto.idImg == numImg;
    });
    detailProduct(filtroImg);
    productDetail.classList.remove('inactive');
    console.log(shopping.getAttribute('class','shopping inactive')==
    'shopping'?shopping.classList.toggle('inactive'):"no");
}

function closeDetailProduct(){
    productDetail.classList.add('inactive');
}

var priceTotal = 0;
function showProductCard(numIconCart){
    filtroIconCart = productList.find(function(producto){
        return producto.idIcon == numIconCart;
    });
    priceTotal = priceTotal + filtroIconCart.price;
    card(filtroIconCart,priceTotal);
}

/* List products */
function listProducts(arr){
    var i = 0;
    var j = 0;
    for (products of arr) {
        const product = document.createElement('div');
        product.classList.add('product');
        
        const img = document.createElement('img');
        img.setAttribute('src',products.img);
        img.classList.add('img'+(i++));
        
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
        iconCart.classList.add("iconCart"+(j++));
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

/* Product detail creation */
function detailProductCreate(){
    
    const detail = document.createElement('div');
    detail.classList.add('detail');

    const div1 = document.createElement('div');
    detail.appendChild(div1);

    
    const img1 = document.createElement('img');
    img1.classList.add('close');
    img1.setAttribute('src', "./Icons/icon_close.png");
    img1.addEventListener('click',closeDetailProduct);
    div1.appendChild(img1);

    var img2 = document.createElement('img');
    img2.classList.add('imgDetail');
    div1.appendChild(img2);
    
    const div2 = document.createElement('div');
    detail.appendChild(div2);
    
    var h1 = document.createElement('h1');
    h1.classList.add('h1Detail');
    div2.appendChild(h1);
    
    var h2 = document.createElement('h2');
    h2.classList.add('h2Detail');
    div2.appendChild(h2);
    
    var p = document.createElement('p');
    p.classList.add('pDetail');
    div2.appendChild(p);

    const div3 = document.createElement('div');
    detail.appendChild(div3);
    
    const img3 = document.createElement('img');
    img3.setAttribute('src', "./Icons/icon_shopping_cart.svg");
    div3.appendChild(img3);
    
    const input = document.createElement('input');
    input.setAttribute('type', "submit");
    input.setAttribute('value', "Add to cart");
    div3.appendChild(input);

    productDetail.appendChild(detail);
    
}

/* Product detail Query */
function detailProduct(product){
    const imgDetail = document.querySelector('.imgDetail');
    const h1Detail = document.querySelector('.h1Detail');
    const h2Detail = document.querySelector('.h2Detail');
    const pDetail = document.querySelector('.pDetail');
    imgDetail.setAttribute('src', product.img);
    h1Detail.innerText = "$" + product.price;
    h2Detail.innerText = product.name;
    pDetail.innerText = product.information;
}

/* Card creation */
function cardCreate(){

    const amount = document.createElement('div');
    amount.classList.add('amount');
    
    const p3 = document.createElement('p');
    p3.innerText = "Total";
    amount.appendChild(p3);

    const p4 = document.createElement('p');
    p4.classList.add('priceTotal');
    amount.appendChild(p4);

    shopping.appendChild(amount);

    const inputButton = document.createElement('input');
    inputButton.classList.add('input-button');
    inputButton.setAttribute('type',"submit");
    inputButton.setAttribute('value',"Checkout");
    
    shopping.appendChild(inputButton);
}

/* Card detail */
function card(productCard,priceTotal){
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const div1 = document.createElement('div');
    card.appendChild(div1);
    
    const img1 = document.createElement('img');
    img1.classList.add('imgCard');
    img1.setAttribute('src',productCard.img);
    div1.appendChild(img1);
    
    const p1 = document.createElement('p');
    p1.classList.add('p1Card');
    p1.innerText = productCard.name;
    div1.appendChild(p1);
    
    const div2 = document.createElement('div');
    card.appendChild(div2);
    
    const p2 = document.createElement('p');
    p2.classList.add('p2Card');
    p2.innerText = "$" + productCard.price;
    div2.appendChild(p2);
    
    const img2 = document.createElement('img');
    img2.classList.add('iconClose');
    img2.setAttribute('src',"./Icons/icon_close.png");
    div2.appendChild(img2);

    articles.appendChild(card);

    const p4 = document.querySelector('.priceTotal');
    p4.innerText = "$" + priceTotal;

}

/* Pref. IMG */
var variablesImg = [];
var prefijoImg = 'img';
for (var i = 0; i < productList.length; i++) {
    variablesImg.push(prefijoImg+i);
  }
/* Querys IMG */
for (let index = 0; index < productList.length; index++) {
    variablesImg[index] = document.querySelector(".img"+index);
    variablesImg[index].addEventListener('click',function() {showDetailProduct("img"+index)});
    
}


/* Pref. ICONCART */
var variablesIcon = [];
var prefijoIconCart = 'iconCart';
for (var i = 0; i < productList.length; i++) {
    variablesIcon.push(prefijoIconCart+i);
}
/* Querys Icon Cart */
for (let index = 0; index < productList.length; index++) {
        variablesIcon[index] = document.querySelector(".iconCart"+index);
        variablesIcon[index].addEventListener('click',function() {showProductCard("iconCart"+index)});
        
    }

     