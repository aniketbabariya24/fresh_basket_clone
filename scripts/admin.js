let form =document.getElementById('product_form')
let product_data=JSON.parse(localStorage.getItem('product_data'))||[]

       
form.addEventListener('submit',function(event){
    event.preventDefault()
    let obj={
        name:form.product_name.value,
        brand:form.product_brand.value,
        price:Number(form.product_price.value),
        image:form.product_image.value,
       }
       
        product_data.push(obj)
        localStorage.setItem('product_data',JSON.stringify(product_data))
        location.reload()
       console.log(obj)
})