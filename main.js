window.addEventListener("scroll", function () {
    menu();
});

let ubicacionPrincipal = window.pageYOffset;
const menu = () => {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual && screen.width > 800) {
        document.getElementById("nav").style.top = '0px';
    }
    else if (ubicacionPrincipal != desplazamientoActual && screen.width <= 800) {
        document.getElementById("nav").style.top = '0px';
    } else {
        document.getElementById("nav").style.top = '-100px';
    }

    ubicacionPrincipal = desplazamientoActual;
}


const hamburguesa = document.querySelector(".hamburguesa");

const menuDesplazable = document.querySelector('.menu-navegacion');

hamburguesa.addEventListener("click", () => {
    let boleano = menuDesplazable.classList.toggle("spread");
});

window.addEventListener('click', e => {
    if (menuDesplazable.classList.contains('spread') && e.target != menuDesplazable
        && e.target != hamburguesa) {
        menuDesplazable.classList.toggle('spread');
    }
});

document.getElementById('infoToggle').addEventListener('click', function () {

    if (!document.querySelector('.container-cer').classList.contains('show')) {
        let template_certificacion = document.getElementById('template-certificacion');
        let clone_cer = template_certificacion.content.cloneNode(true);
        document.querySelector('.container-cer').appendChild(clone_cer);
        document.querySelector('.chevron').setAttribute('src', 'https://img.icons8.com/pastel-glyph/50/circled-chevron-up.png');
    } else {
        document.querySelector('.container-cer').innerHTML = '';
        document.querySelector('.chevron').setAttribute('src', 'https://img.icons8.com/ios/50/circled-chevron-down.png');
    }

    document.querySelector('.container-cer').classList.toggle('show');
});

document.getElementById('infoToggle_acerdi').addEventListener('click', function () {

    if (!document.querySelector('.container-acre').classList.contains('show')) {
        let template_certificacion = document.getElementById('template-acreditacion');
        let clone_cer = template_certificacion.content.cloneNode(true);
        document.querySelector('.container-acre').appendChild(clone_cer);
        document.querySelector('.chevron_acre').setAttribute('src', 'https://img.icons8.com/pastel-glyph/50/circled-chevron-up.png');
    } else {
        document.querySelector('.container-acre').innerHTML = '';
        document.querySelector('.chevron_acre').setAttribute('src', 'https://img.icons8.com/ios/50/circled-chevron-down.png');
    }

    document.querySelector('.container-acre').classList.toggle('show');
});


