(function(){        /*funcion que se llama a si misma para protejer el codigo y no mesclarlo con lo otros archivos js*/

                    /*↓↓↓ al encerrarlo entre llaves y colocar 3 puntos se convierte en un arreglo*/
    const sliders = [...document.querySelectorAll('.testimony__body')]; /*variable constante llamada sliders que a travez de document.queryselectorAll obtiene todos los elementos con la clase testimony__body*/   
    const buttonNext = document.querySelector('#next');                 /*al colocar # se esta obteniendo el id  */ 
    const buttonBefore = document.querySelector('#before');
    let value;      

    buttonNext.addEventListener('click', ()=>{  /*al boton next le agregamos un evento que cada vez que demos click se ejecute la funcion changeposition() */
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{       /* funcion que tiene como argumento add, se pulsa next y dará +1 en contrario before dará -1*/
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; /*de testimony__body--show obtenemos el datset */
        value = Number(currentTestimony); /*agregamos a value los dataset.id*/
        value += add;                     /*agregamos a value el valor que se obtengan de los elementos en este caso +1 o -1 */

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');   /*le quitamos la clase testimony__body--show para poder agregarla a otro testimonio, el -1 es porque en programacino se cuenta desde 0 */
        if(value === sliders.length+1 || value === 0){   /*length sirve para contar cuantos elementos tengo en slider, en este caso 3 testimonios y le sumamos 1 */
            value = value === 0 ? sliders.length : 1;    /*le damos a value un nuevo valor en caso de que quiera retroceder desde el primer testimoio me dara el valor de slider.length que es la cantidad total de testimonios (3) por el contrario si pasa de 3 tendrá el valor de 1 */
        }

        sliders[value-1].classList.add('testimony__body--show'); /* queremos acceder al elemento qe tenga value, el -1 es porque en programacion contamos desde 0, obtenemos sus clases y agregamos la clase testimony__body--show que es la clase que hace que los elementos se muestren */
    }
})();