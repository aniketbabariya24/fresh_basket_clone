
let images= ['https://d1z88p83zuviay.cloudfront.net/BannerImages/30c36f71-c01f-41eb-bbbb-a56a1f438c39_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/a5ad3541-5426-47e1-b33c-0360c5e28c35_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/88b99410-b311-4c4d-a2bd-61859cdc494a_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/8f6ba871-ab4e-4f01-b71c-c913dfb63f11_1320x376.jpg',
'https://i.ibb.co/RTzwD1t/MAIN-slider-3.png',
'https://i.ibb.co/HKX3SHk/MAIN-slider-2.png',
'https://i.ibb.co/ZKZ0bf3/MAIN-slider1.png'
]

let image= document.createElement("img");
image.style.border="100%";

function counter(){
image.src=images[0];  
document.querySelector("#img").append(image);

  let i=1; 
  let interval=setInterval(function(){
      if(i==images.length){
          i=0;
      }
      image.src=images[i];   
   document.querySelector("#img").append(image);

    i++;
  },3000);
}
counter(); 

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// imageArr= [
//     'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg',
//     'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg',
//     'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg'
// ]

// let image2= document.createElement("img");
// image2.style.width="100%";

//         function counter2(){
//             image2.src=imageArr[0];  
//             document.querySelector("#img2").append(image2);
          
//                 let j=1; 
//                 let interval2=setInterval(function(){
//                     if(j==imageArr.length){
//                         j=0;
//                     }
//                     image.src=imageArr[j];   
//                  document.querySelector("#img2").append(image2);
          
//                   j++;
//                 },3000);
//             }

//             counter2();

//Day-3