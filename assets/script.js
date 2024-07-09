let hamerger_cross_toogle=document.querySelector(".hamerger_cross_toogle")
hamerger_cross_toogle.addEventListener("click",()=>{
  console.log("hello")
  hamerger_cross_toogle.classList.toggle("fa-xmark")

console.log("ss")
  
})

window.addEventListener("scroll", (event) => {
    let sValue=window.scrollY
  let nav_bg_remove=document.querySelector(".nav_bg_remove")
   if(sValue>10){
      nav_bg_remove.style.background="black"
   }
   else {
        nav_bg_remove.style.background="transparent"
   }
  
 });