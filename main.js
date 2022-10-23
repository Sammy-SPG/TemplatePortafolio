window.addEventListener("scroll",function(){
    menu();
});

    let ubicacionPrincipal = window.pageYOffset;
const menu = ()=>{
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual && screen.width > 800){
        document.getElementById("nav").style.top = '0px';
    }
    else if(ubicacionPrincipal != desplazamientoActual && screen.width <= 800){
        document.getElementById("nav").style.top = '0px';
    }else{
        document.getElementById("nav").style.top = '-100px';
    }

    ubicacionPrincipal = desplazamientoActual;
}


 const hamburguesa = document.querySelector(".hamburguesa");

 const menuDesplazable = document.querySelector('.menu-navegacion');

 hamburguesa.addEventListener("click",()=>{
    let boleano = menuDesplazable.classList.toggle("spread");
 });

 window.addEventListener('click',e=>{
     if(menuDesplazable.classList.contains('spread') && e.target != menuDesplazable
            && e.target != hamburguesa){
                menuDesplazable.classList.toggle('spread');
     }
 });


 