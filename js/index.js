
(function(win, doc){
'use strict';

    const target = doc.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animeScroll(){
        const windowTop = win.pageYOffset + ((win.innerHeight * 0.75));
        target.forEach(function(element){
            if((windowTop) > element.offsetTop){
                element.classList.add(animationClass);
            }else{
                element.classList.remove(animationClass);
            }
        })
    }

    animeScroll();

    
    /*Api github
        function getApiGitHub(){
        let ajax = new XMLHttpRequest();
        let data = 'https://api.github.com/users/elessandroprestes';
        ajax.open('GET', data, true);
        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200){
                data.foreach((element)=>{
                    let $div = doc.querySelector('[data-js="dropdown-js"]');
                });
            }
        };
        }
    */
//Modal
    
    let modal = doc.querySelector('[data-js="jsModal"]');

    let btn = doc.querySelector('[data-js="jsBtn"]');

    let close = doc.querySelector('[data-js="jsClose"]');

    btn.addEventListener("click", function(e){
        e.preventDefault();
        modal.style.display = "block";
    });

    close.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "none";
    });

    win.addEventListener("click", function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });


})(window, document);