let menu_btn = document.getElementById("menu-icon"); 
let navbar = document.querySelector('.links'); 

var counter = document.querySelectorAll(".num");
var sec = document.querySelector('.sec3');

// var image = document.getElementById("image")

// var count = 0 ;


menu_btn.addEventListener ("click" , () => {
    menu_btn.classList.toggle("bx-x");
    navbar.classList.toggle("open");
});


AOS.init();

AOS.init({
    duration: 1000
});



// var imagesList = ['images/bg-counter2.jpg' , 'images/image-landing.jpg' , 'images/image-list.jpg' ];
// var i = 0 ;

// function slideshow() {
//     image.src = imagesList[i];

//     if (i < imagesList.length-1) {
//         i++;
//     }else{
//         i = 0 ;
//     }

//     setTimeout(() => {
//         slideshow()
//     }, 4000);
// }

// window.onload = slideshow() ;




























// window.onscroll = function () {
//     if (window.scrollY >= sec.offsetTop -100) {
//         upNumber();
//     }
// }


// function upNumber() {
     
//     counter.forEach( (value) => {
//         value.innerHTML =++ count ;
//         if (count === 40) {
//             clearInterval(CountInterval);
//         }
//     });
    
// }


// let CountInterval =  setInterval(upNumber , 150);

