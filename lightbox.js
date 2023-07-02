const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLigth = document.querySelector('.agregar-imagen');
const contenedorLigth = document.querySelector('.imagen-light');

let data_text = [
    "A lo largo de los años, el cemento se ha ido modificando, mejorando y adecuando a las necesidades constructivas. Aunque aún se considera experimental, el concreto translúcido supone una gran innovación en la industria. Es un concreto polimérico que incluye cemento, agregados y aditivos en su composición, permite el paso de la luz y dispone de características mecánicas superiores a las del cemento tradicional.",

    " Según Oficemen, la Agrupación de Fabricantes de Cemento de España, el hormigón es el segundo material más consumido del mundo después del agua. Su popularidad ha desembocado en múltiples investigaciones, como la de la Universidad Tecnológica de Delf, en la que se desarrolló un biohormigón capaz de repararse a sí mismo. Se introducen en el hormigón cápsulas que contienen bacterias y lactato de calcio: si aparece una grieta, la próxima lluvia rompe estas cápsulas, generando una reacción química que la repara.",

    " Esta innovación tecnológica parece estar revolucionando una de las profesiones más antiguas del mundo. Gracias a la RA, es posible unir proyectos arquitectónicos virtuales con la realidad del terreno donde se construye, reduciendo errores, ahorrando tiempo y recursos y aumentando la precisión y la eficiencia.",

    ". Hace cinco años, el australiano Mark Pivac creó el robot Hadrian X, capaz de colocar 1.000 ladrillos por hora. Desde hace algunos meses, este sorprendente robot albañil ya trabaja en proyectos reales y construye sus primeras casas. De hecho, no se limita a poner ladrillos: corta bloques con precisión milimétrica y pone adhesivo, entre otros.",

    "Estos aparatos suponen una ventaja debido a su autonomía, a la posibilidad de adicionar otros equipos a su estructura y a su aplicación en tareas complejas que reemplazan a la tripulación humana. En construcción destaca su uso para la prospección de terrenos y para la creación de contenido visual para las inspecciones y garantías de seguridad. Esta innovación tecnológica reduce el tiempo de acción, los riesgos y los costes operativos.",

    " Las utilidades de este desarrollo se han visto en todos los sectores, de las que ya se beneficia la construcción y el urbanismo. En la actualidad no existen dispositivos que puedan imprimir edificios completos, por ejemplo, pero la tendencia está clara: lugares como Dubai han impuesto por ley que, para 2025, una cuarta parte de cada edificio que se construya tendrá que estar realizada por impresión 3D.",
];

let textContent = new Array();

let i = 0;

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',() =>{
        aparecerImagen(imagen.getAttribute('src'));
    });

    textContent[imagen.getAttribute('src')] = data_text[i];
    i++;
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
    document.querySelector('.texto').textContent = textContent[imagen];
    contenedorLigth.classList.toggle('show');
    imagenesLigth.classList.toggle('showImage');
    document.getElementById("nav").style.top = '-100px';
}