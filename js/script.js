

const botonArriba = document.querySelector("#arriba")

botonArriba.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

