# 15GridWebairBnBGridFlexJS
* 15 Grid Web airBnB. Uso de Grid Flex position JS

```javascript
/* Destinos Populares */

.destinos .contenedor-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

}

/* footer */
.footer {
    /* se pierde pero se debe */
    position: fixed;
    /* dar una posición. lo deja abajo, pierde estilos */
    bottom: -100%;
    background-color: var(--blanco);
    width: 100%;
    -webkit-box-shadow: -1px -5px 5px -1px rgba(0,0,0,0.67);
    -moz-box-shadow: -1px -5px 5px -1px rgba(0,0,0,0.67);
    box-shadow: -1px -5px 5px -1px rgba(0,0,0,0.67);
    transition: all .5s ease-in;
    padding: 1rem 0;
}
/* clic JS agrega esta clase cambia el texto */
/* las dos clases se dejan junto */
.footer.activo {
    bottom: 0;
}

/* boton footer */
.btn-flotante {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background-color: var(--blanco);
    color: var(--obscuro);
    padding: .5rem 2rem;
    text-decoration: none;
    -webkit-box-shadow: 8px 17px 31px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 8px 17px 31px -4px rgba(0,0,0,0.75);
    box-shadow: 8px 17px 31px -4px rgba(0,0,0,0.75);
    transition: all .3s ease-in-out;
}

.btn-flotante .activo,
.btn-flotante:hover {
    background-color: var(--primario);
    color: var(--blanco);
}


```
