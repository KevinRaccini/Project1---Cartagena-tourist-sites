(function(){      /*funcion autoimbocada para protejer las variables de otros archivos */

    const openButton = document.querySelector('.nav__menu');    /*variable que obtiene al menu hamburguesa */
    const menu = document.querySelector('.nav__link');   
    const closeButton = document.querySelector('.nav__close');


    openButton.addEventListener('click', ()=>{   /*evento click para el menu hamburguesa */
        menu.classList.add('nav__link--show');    /*a nav__link le agregamos la clase nav__link--show para que aparesca  */
    });

    closeButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();