let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PN-1',
        image: 'all-images/women-sect-img/wo-sect-img1.jpg',
        imageF: '1F.jpg',
        prePrice: 15000,
        price: 1200
    },
    {
        id: 2,
        name: 'PN-2',
        image: 'all-images/women-sect-img/wo-sect-img2.jpg',
        imageF: '2F.jpg',
        prePrice: 1100,
        price: 1000
    },
    {
        id: 3,
        name: 'PN-3',
        image: 'all-images/women-sect-img/wo-sect-img3.jpg',
        imageF: '3F.jpg',
        prePrice: 2000,
        price: 700
    },{
        id: 4,
        name: 'PN-4',
        image: 'all-images/women-sect-img/wo-sect-img4.jpg',
        imageF: '4F.jpg',
        prePrice: 3000,
        price: 900
    },
    {
        id: 5,
        name: 'PN-5',
        image: 'all-images/women-sect-img/wo-sect-img5.jpg',
        imageF: '5F.jpg',
        prePrice: 2800,
        price: 1900
    },
    {
        id: 6,
        name: 'PN-6',
        image: 'all-images/women-sect-img/wo-sect-img6.jpg',
        imageF: '6F.jpg',
        prePrice: 1700,
        price: 599
    },
    {
        id: 7,
        name: 'PN-7',
        image: 'all-images/women-sect-img/wo-sect-img7.jpg',
        imageF: '7F.jpg',
        prePrice: 1600,
        price: 599
    },
    {
        id: 8,
        name: 'PN-8',
        image: 'all-images/women-sect-img/wo-sect-img8.jpg',
        imageF: '8F.jpg',
        prePrice: 7000,
        price: 599
    },
    {
        id: 9,
        name: 'PN-9',
        image: 'all-images/women-sect-img/wo-sect-img9.jpg',
        imageF: '9F.jpg',
        prePrice: 9000,
        price: 599
    },
    {
        id: 10,
        name: 'PN-10',
        image: 'all-images/women-sect-img/wo-sect-img10.jpg',
        imageF: '10F.jpg',
        prePrice: 990,
        price: 599
    },
    {
        id: 11,
        name: 'PN-11',
        image: 'all-images/women-sect-img/wo-sect-img11.jpg',
        imageF: '11F.jpg',
        prePrice: 1200,
        price: 599
    },
    {
        id: 12,
        name: 'PN-12',
        image: 'all-images/women-sect-img/wo-sect-img12.jpg',
        imageF: '12F.jpg',
        prePrice: 1400,
        price: 599
    },
    {
        id: 13,
        name: 'PN-13',
        image: 'all-images/women-sect-img/wo-sect-img13.jpg',
        imageF: '13F.jpg',
        prePrice: 1100,
        price: 599
    },
    {
        id: 14,
        name: 'PN-14',
        image: 'all-images/women-sect-img/wo-sect-img14.jpg',
        imageF: '14F.jpg',
        prePrice: 1000,
        price: 599
    },
    {
        id: 15,
        name: 'PN-15',
        image: 'all-images/women-sect-img/wo-sect-img15.jpg',
        imageF: '15F.jpg',
        prePrice: 1600,
        price: 599
    },
]
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="card-img-container"><img src="${value.image}"/>
            <img class="flip-img" src="all-images/women-sect-img/wo-sect-img${value.imageF}"/></div>  
            <div class="title">₹ ${value.name}</div>
            <div class="price"><div class="prePrice">₹ ${value.prePrice.toLocaleString()}</div>₹ ${value.price.toLocaleString()}</div>
            <div class="cardBtnGr"><button onclick="addToCard">Buy <i class="bi bi-credit-card-fill"></i></button>
            <button onclick="addToCard(${key})">Cart <i class="bi bi-cart"></i></button></div>
        `;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>₹ ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = '₹' + totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}