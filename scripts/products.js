const APIKIY = `sjYjaQYJg7twCbi4Lj3gr51ujbvUxshEKI3HsvYG5H4`
let gallery = document.getElementById("products")
let search=document.getElementById('Tsearch')
let fruits=document.getElementById('fruits');
let exFruits=document.getElementById('exFruits');
let vegies=document.getElementById('vegies');
let exVegies=document.getElementById('exVegies');
let apple=document.getElementById('apple');
let orange=document.getElementById('orange');
let potato=document.getElementById('potato');
fruits.addEventListener("click",queryIsFruit);
exFruits.addEventListener("click",queryIsExFruits);
vegies.addEventListener("click",queryIsvegies);
exVegies.addEventListener("click",queryIsExVegies);
apple.addEventListener("click",queryIsApple); 
orange.addEventListener("click",queryIsOrange);
potato.addEventListener("click",queryIsPotato);
search.addEventListener("click",searchQuery);
let searchParam;
function localsearch(){
    searchParam=localStorage.getItem('queri')
    data()
    // console.log(searchParam)
}
localsearch()
function queryIsFruit(){
    searchParam = "fruits";
    data();
}
function queryIsExFruits(){
    searchParam = "Exotic fruits";
    data();
}

function searchQuery(){
searchParam = document.getElementById("query").value;
 data();
}

function queryIsvegies(){
    searchParam = "Vegetables";
    data();
}
function queryIsExVegies(){
    searchParam = "Exotic Vegetables";
    data();
}
function queryIsApple(){
    searchParam = "apple";
    data();
}
function queryIsOrange(){
    searchParam = "orange";
    data();
}
function queryIsPotato(){
    
    searchParam = "potato";
    data();
}

async function data () {
 searchParam;

    try {
        let res = await fetch(`https://api.unsplash.com/search/photos?client_id=${APIKIY}&query=${searchParam}&per_page=20`)
        let data = await res.json()
        let final_data = data.results
        //  console.log(final_data);
       display(final_data)
    } catch (error) {
        console.log(error);
    }
}

const display = (data) => {
    gallery.innerHTML = null;
    data.forEach((el) => {
        // console.log('el',el);
        if(el.alt_description!=null && el.urls.small!==null){

        
        let div = document.createElement("div");
       
        let imgDiv= document.createElement("div");
        imgDiv.setAttribute("class", "image");

        const img = document.createElement('img');
        img.src = el.urls.small;
       
        imgDiv.append(img);

        let textDiv= document.createElement('div');

        const heading = document.createElement("p");
        heading.innerText = el.alt_description;
        
        const priceBtn = document.createElement("button");
        priceBtn.setAttribute ("id","priceBtn")
        
        let sTag= document.createElement("s");
        sTag.innerText = "MRP ₹130" ;
        priceBtn.append(sTag);

        const priceBtn2 = document.createElement("button");
        priceBtn2.setAttribute ("id","priceBtn2")
        priceBtn2.innerText = "₹100";
        let addtoCart=JSON.parse(localStorage.getItem('addtoCart'))||[]
        const bun = document.createElement("button");
        bun.setAttribute ("id","addBtn")
        bun.innerText="ADD"
        bun.addEventListener('click',function(){
            // console.log("invoked function")
            // console.log(el.alt_description);
            let obj={
                img:el.urls.small,
                name:el.alt_description,
                price:'100',
                disc:'130',

            }
            addtoCart.push(obj)
            localStorage.setItem('items',JSON.stringify(addtoCart))
            
        })

        textDiv.append(heading,priceBtn,priceBtn2,bun);
        
       
        div.append(imgDiv, textDiv);
        gallery.append(div)
    }
    });
}
// let buttonSearch = document.getElementById("Tsearch");
// buttonSearch.addEventListener("click", function () {

//     searchQuery();
// })

// // Tsearch.addEventListener('click',()=>{
// //     SaveItems(el)
// // })