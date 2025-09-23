let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaAmigos.push(nombreAmigo);
        limpiarCaja();
    };
    actualizarListaAmigos();
    
    console.log(nombreAmigo);
    console.log(listaAmigos);

    return;
};

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
    return;
};

function actualizarListaAmigos() {
    const listaAmigosHtml = document.getElementById('listaAmigos');
    
    //Limpieza de lista exstente
    listaAmigosHtml.innerHTML = "";

    //Recorrido de la lista
    for(let i = 0; i < listaAmigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.innerHTML = `${listaAmigos[i]}`
        listaAmigosHtml.append(elementoLista);
    };
    return;
};