const main=document.querySelector("main");const loader=document.querySelector(".loader img")
const img=document.querySelector("#logo");const navlink=document.querySelectorAll(".navlist ul li a");const navlist=document.querySelector(".navlist");const menu=document.getElementById("menu");const shut=document.getElementById("close");window.onload=()=>{main.style.display="block"
loader.style.display="none"}
menu.addEventListener("click",()=>{navlist.classList.add("active");shut.classList.add("active")})
shut.addEventListener("click",()=>{navlist.classList.remove("active");shut.classList.remove("active");console.log("yes")})
navlink.forEach((i)=>{i.addEventListener("click",()=>{navlist.classList.remove("active");shut.classList.remove("active");console.log("yes")})});img.addEventListener("click",()=>{navlist.classList.remove("active");shut.classList.remove("active");console.log("yes")})