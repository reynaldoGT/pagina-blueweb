const tabla = document.querySelectorAll('.tabla .tablax4  ');
tabla.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.remove('tablax4');
        element.classList.add('tablaxD')

        element.childNodes[1].classList.add('destacado');
    })
});
tabla.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.classList.add('tablax4');
        element.classList.remove('tablaxD')

        element.childNodes[1].classList.remove('destacado');
    })
});
console.log(tabla);


// quitar la clase tablax4
// a la clase activa poner la clase tablaxD
    //En la caja-precio añadir la clase destacado