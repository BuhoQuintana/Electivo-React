function cambiarColor(id, color){
    el = document.getElementById(id);
    el.classList.remove('colorrojo');
    el.classList.remove('colorverde');
    el.classList.add(color);
}

function cambiarColorVerde(){
    cambiarColor('texto1', 'colorverde');
}

function cambiarColorRojo(){
    cambiarColor('texto1', 'colorrojo');
}