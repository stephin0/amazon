let cart = document.querySelector(".cart-icon");
let burger = document.querySelector(".hamburgers-items");
let links = document.querySelector(".hamburger-value");

// cart.addEventListener("mouseover",()=>{
//     cart.innerHTML = "<p>cart</p>"
// })
// cart.addEventListener("mouseout",()=>{
//     cart.innerHTML = "<i class='fa-solid fa-cart-shopping'></i>";
// })

burger.addEventListener("click",()=>{
    menutoggle();
})

function menutoggle(){
    links.classList.toggle("active");
}
