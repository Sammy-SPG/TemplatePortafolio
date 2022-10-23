const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLigth = document.querySelector('.agregar-imagen');
const contenedorLigth = document.querySelector('.imagen-light');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click',() =>{
        aparecerImagen(imagen.getAttribute('src'));
    });
});


contenedorLigth.addEventListener('click', (e)=>{
    if(e.target !== imagenesLigth){
        contenedorLigth.classList.toggle('show');
        imagenesLigth.classList.toggle('showImage');
        document.getElementById("nav").style.top = '0px';
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLigth.src = imagen;
    contenedorLigth.classList.toggle('show');
    imagenesLigth.classList.toggle('showImage');
    document.getElementById("nav").style.top = '-100px';
}