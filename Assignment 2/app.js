var character1 = document.getElementById("")
var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0 
function animateChar(event) { 
    console.log(event.keyCode);
    
    if( event.keyCode == 39  && left < 1480){
        left = left+10
    char1.style.left = left + "px"
    char1.style.transform= "scaleX(1)"
    char1.src = "https://www.fightersgeneration.com/characters/alicewf.gif"
    setTimeout(() =>{
        char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif"
    },1000)
   
}
if (event.keyCode == 32) {
    char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif";

    setTimeout(() => {
        char1.src = "https://www.fightersgeneration.com/characters/alice12.gif";
    }, 1000);
}
}
window.onkeydown = animateChar


