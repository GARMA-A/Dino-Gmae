const dino=document.getElementById("dino");
const cactus =document.getElementById("cactus");



function jump()
{
    if(dino.classList != "jump")
    {
        dino.classList.add("jump");
        setTimeout(function()
        {
         
          dino.classList.remove("jump");
      
      
        },300);
    }
   
}
let isAlive = setInterval(function()
{

 let dinotop =parseInt(window.getComputedStyle(dino).getPropertyValue("top")) ;
 let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

 if(cactusLeft <50 && cactusLeft>0 && dinotop>=140)
 {
    alert("GAME OVER!");
 }


},10)

document.addEventListener("keydown",function(event)
{
 jump();
}

);