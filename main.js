const burger = document.getElementById("hamburger");
const list = document.getElementById("navlist");

burger.addEventListener("click",()=>{
    list.classList.toggle("navlist-active"); //toggle mainly show and height ke liye use karte hai
})