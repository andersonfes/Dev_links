 /* SELECIONA O ID E ADICIONA UM EVENTO DE CLICK COM UMA FUNÇÃO  */
document.getElementById("switch").addEventListener("click", function () {
   
    const html = document.documentElement;

    html.classList.toggle("light")
})