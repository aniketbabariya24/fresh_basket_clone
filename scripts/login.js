let lg_signup = document.querySelector("#lg_signup")
lg_signup.addEventListener("click" , ()=>{
    window.location.href = 'join_as.html'
})


let login_email = document.getElementById('login_email')
let btn = document.querySelector("#lg_email")
btn.onclick = function(){
    let obj = {
        email:login_email.value
    }
    localStorage.setItem("login_data" , JSON.stringify(obj))
   window.location.href = 'index.html'
}
