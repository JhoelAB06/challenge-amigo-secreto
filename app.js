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

function sortearAmigo() {
    if(listaAmigos.length == 0) {
        alert('No has agregado amigos aún, agrégalos ahora.');
        return;
    };
    //Generación de un índice aleatorio.
    const indice = Math.floor(Math.random() * listaAmigos.length);

    //Obtención del nombre sorteado y mostrar el resultado
    const amigoSorteado = listaAmigos[indice];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Felicidades, tu amigo secreto es ${amigoSorteado}`; 

    console.log(`INDICE: ${indice}`);
    console.log(`amigoSorteado: ${amigoSorteado}`);

    return;   
};