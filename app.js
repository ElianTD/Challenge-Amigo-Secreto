// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert('Por favor, inserte un nombre válido.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('¡Agrega amigos antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: ${amigoSecreto}! 🎉</li>`;
}