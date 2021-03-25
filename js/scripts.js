document.addEventListener('DOMContentLoaded', () => {
    // Obtener la imagen
    const imagenHero = document.querySelector('.hero');
    // Inicializar las variables
    let incrementar = 0;
    let tiempo = 0;

    // arreglo con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];
    setInterval(() =>{
        imagenHero.style.backgroundPositionY = '-'+tiempo+'px';

        if (tiempo > 40) {
            tiempo = 0;

            imagenHero.style.backgroundImage = `url(img/${imagenes[incrementar]})`;
            if(incrementar === imagenes.length -1) {
                incrementar = 0;
            } else {
                incrementar++;
            }
            console.log(imagenes[incrementar]);      
        }    
        tiempo++;  
        console.log(tiempo);
    }, 100);


    // boton flotante en el footer
    const btnFlotante = document.querySelector('.btn-flotante');
    // console.log(btnFlotante);
    btnFlotante.addEventListener('click', (evento) => {
        //  Probar evento click
        //  alert("Funciona");

        //  Prevenir abrir el Enlace
        evento.preventDefault();
        // Prevenimos default, pero ejecutamos el sgte código
        const footer = document.querySelector('#footer');
        // forma para acceder a las clases del footer 
        // console.log(footer.classList);
        if (footer.classList.contains('activo') ) {
            // Si lo contiene, ejecuta este código
            // remueve clase 
            footer.classList.remove('activo');
            // Cambiar texto de boton
            btnFlotante.innerText = 'Idioma y Moneda';
            btnFlotante.classList.remove('activo');
        } else {
            // Sino lo contiene, ejecuta este código
            // agregar clase
            footer.classList.add('activo');
            // cambiar texto de boton
            btnFlotante.innerText = 'X Cerrar';
            btnFlotante.classList.add('activo');
        }

    });
});