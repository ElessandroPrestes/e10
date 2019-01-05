 

//Animação scroll javascript puro
const debounce = function (func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!imediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

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



