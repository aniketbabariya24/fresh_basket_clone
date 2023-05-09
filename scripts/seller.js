let div = document.getElementById('r_checkbox')
let count = 0;
let data = []
div.onclick=function(){
    count++
    let btn=document.getElementById('sghr_btn')
    if(count%2==0){
        div.style.backgroundColor = "white"
    }else{
        div.style.backgroundColor = "green"
    } 
    btn.addEventListener('click',function(){
        let firstname = document.getElementById('firstname')
        let lastname = document.getElementById('lastname')
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        let country = document.getElementById('country')

        
        let obj = {
            Firstname:firstname.value,
            Lastname:lastname.value,
            Email:email.value,
            Password:password.value,
            Country:country.value,
        }
        // let small=0;
        // let capital=0;
        // let num=0;
        // let spec=0;
        // let Password=obj.Password
        // for(let i=0;i<Password.length;i++){
        //   if(Password[i]>='a'||Password[i]<='z'){
        //     small++
        //   }else if(Password[i]>='A'||Password[i]<='Z'){
        //     capital++
        //   }else if(Password[i]>=0||Password[i]<=9){
        //     num++
        //   }else if(Password=='!'||Password=='@'||Password=='#'||Password=='$'||Password=='%'||Password=='&'||Password=='*'){
        //     spec++
        //   }
        // }

        // if(firstname.value == '' || lastname.value == '' || email.value == '' || password.value == '' || country.value == ''){
        //     alert("Please Fill all the Details")
        // }else{
         
        //   alert("lol")
        // }
        data.push(obj)
        localStorage.setItem("signup_data_seller" , JSON.stringify(data))
          

    })

}
// var pass = document.getElementById("password");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");
// // When the user clicks on the password field, show the message box
// pass.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }
// // When the user clicks outside of the password field, hide the message box
// pass.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }
// // When the user starts to type something inside the password field
// pass.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(pass.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }
//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(pass.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }
//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(pass.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }
//   // Validate length
//   if(pass.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }
// </script>


// myInput.onkeyup = function() {
//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;
//     if(myInput.value.match(lowerCaseLetters)) {
//       letter.classList.remove("invalid");
//       letter.classList.add("valid");
//     } else {
//       letter.classList.remove("valid");
//       letter.classList.add("invalid");
//     }
//     // Validate capital letters
//     var upperCaseLetters = /[A-Z]/g;
//     if(myInput.value.match(upperCaseLetters)) {
//       capital.classList.remove("invalid");
//       capital.classList.add("valid");
//     } else {
//       capital.classList.remove("valid");
//       capital.classList.add("invalid");
//     }
//     // Validate numbers
//     var numbers = /[0-9]/g;
//     if(myInput.value.match(numbers)) {
//       number.classList.remove("invalid");
//       number.classList.add("valid");
//     } else {
//       number.classList.remove("valid");
//       number.classList.add("invalid");
//     }
//     // Validate length
//     if(myInput.value.length >= 8) {
//       length.classList.remove("invalid");
//       length.classList.add("valid");
//     } else {
//       length.classList.remove("valid");
//       length.classList.add("invalid");
//     }
//   }