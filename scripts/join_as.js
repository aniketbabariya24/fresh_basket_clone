// let div1 = document.querySelector("#r_div1")
// div1.addEventListener('click', ()=>{
//     // window.location.href = 'hire.html'
//     raisg()
// })
// let div2 = document.querySelector("#r_div2")
// div2.addEventListener('click', ()=>{

//     // window.location.href = 'freelancer.html'
//     raisg()
// })

// // const raisg = ()=>{
// //     window.location.href = 'hire.html'
// }

let btn_append = document.getElementById('btn_append')

let r_div1=document.getElementById('r_div1')
r_div1.onclick=function(){

    let btn=document.getElementById('r_btn')
    btn_append.innerHTML= null
    btn.style.display = "none"
    r_div2.style.border = '2px solid grey'
    r_div1.style.border = '3px solid rgb(5, 173, 5)'
    let button=document.createElement('button')
    button.innerText = 'Join as a consumer';
    button.style.backgroundColor = "green";
    button.style.width = "60%";
    button.style.color = "white"
    button.addEventListener('click',function(){
        // sellpage()
        window.location.href = 'consumer.html'
    })
    btn_append.append(button)
}
let r_div2=document.getElementById('r_div2')
r_div2.onclick=function(){
    let btn=document.getElementById('r_btn')
    btn_append.innerHTML = null
    r_div1.style.border = '2px solid grey'
    r_div2.style.border = '3px solid rgb(5, 173, 5)'
    btn.style.display = "none"
    let button=document.createElement('button')
    button.innerText = 'Join as a seller';
    button.style.backgroundColor = "green";
    button.style.width = "60%";
    button.style.color = "white"
    button.addEventListener('click',function(){
        // custpage()
        window.location.href = 'seller.html'
    })
    btn_append.append(button)
}