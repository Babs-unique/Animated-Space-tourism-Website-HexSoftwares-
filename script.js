let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav-links")
burger.addEventListener("click",()=>{
    console.log("Clicked");
    nav.classList.toggle("show-nav")
    burger.classList.toggle("toggle")
})