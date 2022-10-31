const header = document.querySelector(".header");
const proyectsImg = document.querySelectorAll(".proyect__img");
const skillsGroup = document.querySelectorAll(".contSkills__group");
const homeEnlaces = document.querySelectorAll(".nav__a");
const inicioNombre = document.querySelector(".inicio__nombre");
const inicioCargo = document.querySelector(".inicio__cargo");
const inicioRedes = document.querySelector(".inicio__redesSociales");
const logo = document.querySelector(".header__logo");
const delays = ["0s", ".2s",  ".4s", ".6s", ".8s", "1s", "1.2s", "1.4s", "1.6s", "1.8s"];
let differentProyects = [];

logo.style.transform = "none";
logo.style.opacity = "1";
inicioNombre.style.transform = "none";
inicioNombre.style.opacity = "1";
inicioCargo.style.transform = "none";
inicioCargo.style.opacity = "1";
inicioRedes.style.transform = "none";
inicioRedes.style.opacity = "1";


//Ciclo for para agregar delays a las transiciones de los skills
//Al ser 10 skills preferi hacerlo desde javascript
for(let i=0; i<skillsGroup.length; i++) {
    skillsGroup[i].style.transitionDelay = delays[i];
}

//Ciclo for para quitar transform a los enlaces del home
for(let i=0; i<homeEnlaces.length; i++) {
    homeEnlaces[i].style.transform = "none";
    homeEnlaces[i].style.opacity= "1";
}

document.addEventListener("scroll", ()=>{
    let windowHeight = window.innerHeight;//altura de la pagina
    //Ciclo for para quitar el transform de cada uno de los proyectos
    for(let i=0; i<proyectsImg.length; i++){
        differentProyects[i] = proyectsImg[i].getBoundingClientRect().top;
        if(differentProyects[i] <= windowHeight) {
            proyectsImg[i].style.transform = "none";
        }
    }
    //Ciclo for para quitar el transform de cada uno de los skills(lenguanes de programación)
    if(skillsGroup[0].getBoundingClientRect().top <= windowHeight) {
        for(let i=0; i<skillsGroup.length; i++) {
            skillsGroup[i].style.transform = "none";
            skillsGroup[i].style.opacity = "1";
        }       
    }

    //Condicional para que el menú bar se oculte y se muestre según su posición
    if(this.scrollY == 0) {
        header.style.background = "rgba(255,255,255, 0)";
    }
    else {
        header.style.background = "rgba(0,0,0, .9)";
    }
});