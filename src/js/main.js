document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('[data-curiosidade-perguntas]')
    //curiosidades
    for(let i = 0; i < perguntas.length; i++){
        perguntas[i].addEventListener('click', abreFechafaq)
    }
    //scroll
    const wallpaper = document.querySelector('.wallpapers')
    const alturawallpaper = wallpaper.clientHeight

    window.addEventListener('scroll', function(){
        console.log(alturawallpaper)
        
        const posicaoAtual = window.scrollY
        
        console.log(posicaoAtual)
        if(posicaoAtual > alturawallpaper){
            document.getElementById('menu').style.backgroundImage = 'linear-gradient(180deg, rgba(2,1,0,1) 4%, rgba(2,1,0,0.7315301120448179) 44%, rgba(2,1,0,0) 100%)'
        }else{
            document.getElementById('menu').style.backgroundImage = 'linear-gradient(180deg, rgba(2,1,0,0) 4%, rgba(2,1,0,0) 44%, rgba(2,1,0,0) 100%)'
        }
    })

})

function abreFechafaq(elemento){
    const classe = 'curiosidades__perguntas__curiosidade--ativa'
    const pai = elemento.target.parentNode
    console.log(pai)

    pai.classList.toggle(classe)
}