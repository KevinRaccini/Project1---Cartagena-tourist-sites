(function(){    /*funcion autoimbocada para protejer las variables de otros archivos */

    const titleQuestions =[...document.querySelectorAll('.questions__title')];  /*se crea un arreglo con todos los elementos que tengan la clase questions__title */

    titleQuestions.forEach(question =>{         /*por cada pregunta quiero obtener su pregunta individual */
        question.addEventListener('click', ()=>{
            let height = 0;                     /*variable llamada height para calcular la altura de los elementos */
            let answer = question.nextElementSibling;  /*creamos variable answer que obtenga el hermano de question, como question pertenece a questions__title que es un h3 su hermano viene siendo el parrafo questions__show */
            let addPadding = question.parentElement.parentElement;  /* el elemento padre final es el article questions__padding */

            /*mediante el evento click activamos las clases no activas de estilos.css ↓↓↓ */
            question.children[0].classList.toggle('questions__arrow--rotate'); /*Animacion de la flecha */ /* del elemnto cuestion que es el h3 quiero obtener a sus hijos, en especifico al primer hijo [0] que es el spam, y quiero obtener las clases y agregarle o quitarle dependiendo si tiene o no la clase questions__arrow--rotate de estilos.css */
            addPadding.classList.toggle('questions__padding--add');    /*toggle hace que al ejecutar el evento si el lemento no tiene la clase la agrega y si la tiene la quita XD */

            if(answer.clientHeight === 0){      /*si al alemento answer que es el parrafo tiene el height = 0 entramos a la condicion (si entra porque el parrafo en css le colocamos el height en 0)*/ 
                height = answer.scrollHeight;   /*agregamos a height el valor de altura minima que necesitemos para que se muestre todo el parranfo mediante la propiedad scrollheight */
            }
            
            answer.style.height = `${height}px`;        /*al parrafo le agregamos el valor de la vairable height en su propiedad de estilo height */
        })
    });


})();