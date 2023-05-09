// let addtoCart=JSON.parse(localStorage.getItem('addtoCart'))||[]
// console.log(addtoCart)
// let obj={
//     img:el.urls.small,
//     name:el.alt_description,
//     price:'100Rs'

// }

let div=document.getElementById('cart-contaner-1');


function append(data){
    data.forEach(el => {
    
        // < id="cart-container" class="cart-container">
        let indiv=document.createElement('div')
        indiv.id='cart-container';
        indiv.className='cart-container'
        indiv.innerHTML= `<div style="width: 45%;" class="img_desc">
    <img src="${el.img}" alt="" class="cart-img">
    <span>${el.name}</span>
    </div>
    <div style="width: 10%;" class="cart-price">
    &#8377;${el.price}
    </div>
    <div style="width: 10%;" class="discount">
    &#8377;${el.price}
    </div>
    <div style="width: 15%;">
    <input type="number" value="1" class="cart-quantity">
    </div>
    <div style="width: 15%;" class="total-price" id="cartAmount">
    &#8377;${el.price}
    </div>
    <div style="width: 5%;">
    <i class="fas fa-trash-alt cart-remove"></i>
    </div>
    `
    div.append(indiv)
    });
    
}