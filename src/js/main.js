document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('[data-curiosidade-perguntas]')
    //curiosidades
    for(let i = 0; i < perguntas.length; i++){
        perguntas[i].addEventListener('click', abreFechaCuriosdades)
    }
})


function abreFechaCuriosdades(elemento){
    const classe = 'curiosidades__perguntas__curiosidade--ativa'
    const pai = elemento.target.parentNode
    console.log(pai)

    pai.classList.toggle(classe)
}