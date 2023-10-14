let cart = [];
let total = 0;
let count = 0
let cartCount = document.getElementById('cart-count')
function add(proName, proPrice) {
    count++;
    let itemIndex = cart.findIndex(item => item.name === proName);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity++;
        cart[itemIndex].itemTotal = cart[itemIndex].quantity * cart[itemIndex].price;
    }
    else {
        cart.push({ name: proName, price: proPrice, quantity: 1, itemTotal: proPrice });
    }
    total += proPrice;
    updatePr();
}

function remove(proName, proPrice) {
    count--;
    let itemIndex = cart.findIndex(item => item.name === proName);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity--;
        cart[itemIndex].itemTotal = cart[itemIndex].quantity * cart[itemIndex].price;
        total -= proPrice;
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updatePr();
}

function updatePr() {
    const cartItems = document.getElementById('cartitems');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = "";

    cart.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${item.itemTotal}</td>
        `;
        cartItems.appendChild(tr);
    })
    cartTotal.textContent = total;
    if(count>=0){
    cartCount.innerText= count;
}
}
































// const addBtns = document.querySelector('.add1');
// const addBtns2 = document.querySelector('.add2');
// const addBtns3 = document.querySelector('.add3');
// const removeBtns = document.querySelector('.remove');
// const removeBtns2 = document.querySelector('.remove2');
// const removeBtns3 = document.querySelector('.remove3');
// let productOne  = document.querySelector('.productOne')
// let productTwo  = document.querySelector('.productTwo')
// let productThree  = document.querySelector('.productThree')
// let h1 = document.querySelector('.Shopping')
// let count = 0;
// let li = document.createElement('li')


// addBtns.addEventListener('click',()=>{
//     count ++
//     h1.appendChild(li)
//     update();
// })
// function update(){
//     if(count>0){
//     li.innerText = `The total amount ${count} * $10 = ${count*10}`
// } if(count==0){
//     h1.removeChild(li)
// }
// }
// removeBtns.addEventListener('click',()=>{
//     count--;
//     update();
// })

// const addBtns1 = document.querySelector('.add1');
// const addBtns2 = document.querySelector('.add2');
// const addBtns3 = document.querySelector('.add3');
// const removeBtns1 = document.querySelector('.remove');
// const removeBtns2 = document.querySelector('.remove2');
// const removeBtns3 = document.querySelector('.remove3');
// let productOne = document.querySelector('.productOne');
// let productTwo = document.querySelector('.productTwo');
// let productThree = document.querySelector('.productThree');
// let h1 = document.querySelector('.Shopping');
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let li = document.createElement('li');
// let cartInside = document.querySelector('.cartInside')

// addBtns1.addEventListener('click', () => {
//     count1++;
//     cartInside.appendChild(li);
//     update(count1, 10);
// });

// removeBtns1.addEventListener('click', () => {
//     count1--;
//     update(count1, 10);
// });

// addBtns2.addEventListener('click', () => {
//     count2++;
//     cartInside.appendChild(li);
//     update(count2, 20);
// });

// removeBtns2.addEventListener('click', () => {
//     count2--;
//     update(count2, 20);
// });

// addBtns3.addEventListener('click', () => {
//     count3++;
//     cartInside.appendChild(li);
//     update(count3, 30);
// });

// removeBtns3.addEventListener('click', () => {
//     count3--;
//     update(count3, 30);
// });

// function update(count, price) {
//     if (count > 0) {
//         li.innerText = `Total amount for product: ${count} * $${price} = $${count * price}`;
//     } else {
//         cartInside.removeChild(li);
//     }
// }

















// let items = [
//     {
//         name1:'Apple',
//         price1 : 15
//     },
//     {   name2:"Oragne",
//     price2: 10
// },
// {
//     name3:'Kiwi',
//     price3: 20
// }
// ]
// productOne.innerHTML = `${items[0].name1}&nbsp $${items[0].price1} `
// productTwo.innerHTML = `${items[1].name2}&nbsp $${items[1].price2}`
// productThree.innerHTML = `${items[2].name3}&nbsp $${items[2].price3}`

// function add(value,price){
//     let newList = document.createElement('li')
//     newList.value = value,price;
//     let newEle = cartInside.appendChild(newList)


    
// }





















































// addBtns.forEach(addBtn => {
//     addBtn.addEventListener('click', () => {
//         count++;
//         updateCart();
//         console.log(count)
//     });
// });

// removeBtns.forEach(removeBtn => {
//     removeBtn.addEventListener('click', () => {
//         count--;
//         updateCart();
//         console.log(count)
//     });
// });

// function updateCart() {
//     count = Math.max(count, 0); // Ensure count doesn't go negative
//     count2 = count * 15;
//     newPara.innerHTML = `<p>Total items ${count} * 15 = ${count2}</p>`;
// }
