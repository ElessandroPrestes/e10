
((win, doc) =>{
'use strict';

    let modal = doc.querySelector('[data-js="jsModal"]');

    let btn = doc.querySelector('[data-js="jsBtn"]');

    let close = doc.querySelector('[data-js="jsClose"]');

    btn.addEventListener("click", (e) =>{
        e.preventDefault();
        modal.style.display = "block";
    });

    close.addEventListener("click", (e) =>{
        e.preventDefault();
        modal.style.display = "none";
    });

    win.addEventListener("click", (e) =>{
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });


    const target = doc.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

      function animeScroll(){
        const windowTop = win.pageYOffset + ((win.innerHeight * 0.75));
        target.forEach((element) =>{
            if((windowTop) > element.offsetTop){
                element.classList.add(animationClass);
            }else{
                element.classList.remove(animationClass);
            }
        })
    }

    animeScroll();



})(window, document);