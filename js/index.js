let $iconMenuMovil = document.getElementById("iconMenuMovil")
let $iconXMenuMovil = document.getElementById("iconXMenuMovil")

function isMobile(){
    if((navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))){
        let $puntero=document.getElementById("puntero")
        $puntero.style.opacity="1"
        $puntero.classList.add("ocultar-puntero")
        console.log("abierto desde un movil")
    }
    else{
        console.log("abierto desde una pc")
    }
}

function menuMovil(){
    // alert("menu movil")
    let $menuMovil = document.getElementById("menuMovil")
    $menuMovil.classList.toggle("mostrar-menu-movil")
    $menuMovil.classList.toggle("pointer-event-none")
}


document.addEventListener("mousemove", e => {
    let mouseX, mouseY = 0
    mouseX= e.pageX - 40
    mouseY= e.pageY - 25
    let $puntero=document.getElementById("puntero")
    $puntero.style=`transform: translate3d(${mouseX}px, ${mouseY}px, 0)`
})

$iconMenuMovil.addEventListener("click",menuMovil)
$iconXMenuMovil.addEventListener("click",menuMovil)

isMobile()