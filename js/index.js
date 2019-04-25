(function(win){
'use strict'

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
//Função da animação scroll
function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

//Verifica se tem algum evento de scroll acontecendo.
if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
    },200));
}

})(window);