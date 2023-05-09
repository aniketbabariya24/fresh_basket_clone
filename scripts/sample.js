import navbar from  "../components/navbar.js"

// cart_count();
let nav = document.getElementById("navbar-1");
nav.innerHTML = navbar();

// console.log(nav);


document.querySelector("#pinBtn").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active")
})

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active")
})



// function addToCart(el) {
//     let data = JSON.parse(localStorage.getItem("items")) || [];

//     data.push(el);

//     localStorage.setItem("items", JSON.stringify(data));
//     cart_count();
// }

// function cart_count() {
//     let data = JSON.parse(localStorage.getItem("items")) || [];
//     let c = document.getElementById("item_Count");
//     c.innerText = data.length;
// }