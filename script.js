const menu = document.getElementById(`menu`);
const pequeno = document.getElementById(`pequeno`);

menu.addEventListener(`click`, function(){
    if(pequeno.classList.contains('aparecer')){
        pequeno.classList.remove('aparecer')
    }else{
        pequeno.classList.add('aparecer')
    }
})

const elementos = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(function (el) {
    observador.observe(el);
});

document.querySelectorAll('section#servicos .revelar').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.15) + 's';
});