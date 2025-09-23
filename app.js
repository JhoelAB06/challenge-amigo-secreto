let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaAmigos.push(nombreAmigo);
        limpiarCaja();
    };
    
    console.log(nombreAmigo);
    console.log(listaAmigos);

    return;
};

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
    return;
};
