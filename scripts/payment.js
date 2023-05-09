function getOTP(){
    alert("OTP sent on your Email")
}
document.querySelector("#pay").addEventListener("click",function(){
    let otp=document.querySelector("#otp1").value;
    console.log(otp)
    if(otp=="0000"){
window.location.href="paid.html"
    }else{
        alert("Fill correct OTP!")
    }
})

/* <button class="shopping">CONTINUE SHOPPING</button> */
                // <button class="checkout">PROCEED TO CHECKOUT</button>
