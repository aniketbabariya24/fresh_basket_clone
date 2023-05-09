let product_div=document.getElementById('product_list')
let product_list=JSON.parse(localStorage.getItem('product_data'))||[]
display(product_list)
function display(data){
    product_div.innerHTML=null
    // console.log(data)
    data.forEach((el,i) => {
        let div=document.createElement('div')
        div.className='product';
        div.innerHTML=`
        <img src="${el.image}" alt="">
              <h3>${el.brand}</h3>
              <h4>${el.name}</h4>
              <h5>${Number(el.price)}</h5>
        `
        let btn=document.createElement('button')
        btn.className='remove'
        btn.innerText='Remove'
        btn.addEventListener('click',function(){
            removeing(i)
        })
        div.append(btn)
        if(el.name!="" && el.brand!="" && el.image!=null &&el.price!=""){
            product_div.append(div)
        localStorage.setItem('product_data',JSON.stringify(product_list))
        
        }
        


    });
    
}
function removeing(i){
    // console.log(product_list[i])
    product_list.splice(i,1);
    display(product_list)
    
    localStorage.setItem('product_data',JSON.stringify(product_list))


    
}
let sort_lth=document.getElementById('sort_lth')
sort_lth.addEventListener('click',function(){
    let L2H=product_list.sort((a,b) => a.price-b.price)
    display(L2H)
})

let sort_htl=document.getElementById('sort_htl')
sort_htl.addEventListener('click',function(){
    let H2L=product_list.sort((a,b) => b.price-a.price)
    display(H2L)
})