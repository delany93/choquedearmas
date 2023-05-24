// Pagina principal // 
let personajeUsuario = document.querySelector('.personaje-usuario');
let htmlSegundoMenu = document.querySelector('.segundo-menu')
let perfilesJugadores = document.querySelector('.perfiles-jugadores');
let htmlBatallaChat = document.querySelector('.batalla-chat');
let htmlResultado = document.querySelector('.resultado')

let botonSeleccionar = document.querySelector('.start-btn');

// Inicio
htmlSegundoMenu.classList.add('inactive');

// htmlBatallaChat.classList.add('inactive');
htmlResultado.classList.add('inactive');




let usuario
let pcENEMY = Math.floor(Math.random() * 3) + 1;




// Frase pagina principal // 
let frases = [
    "Prepárate para la batalla, el desafío está por comenzar.",
    "El destino te llama a la acción, selecciona tu equipo y adéntrate en la batalla.",
    "Elige sabiamente tus armas y prepárate para la épica contienda que se avecina.",
    "La guerra espera a los valientes, selecciona tu equipo y únete a la batalla.",
    "Antes de enfrentar al enemigo, elige tus herramientas con sabiduría y forja tu camino hacia la victoria."
]

let htmlFraseAleatoria = document.createElement('p');
let fraseAleatoria = obtenerFraseAleatoria();

htmlFraseAleatoria.innerHTML = fraseAleatoria;
htmlBatallaChat.appendChild(htmlFraseAleatoria);

function obtenerFraseAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

// 
let guardianDeLaRoca = document.getElementById('guardian input');
let maestroDeLasHojas = document.getElementById('maestro input');
let reinaDeLaCorte = document.getElementById('reina input');


botonSeleccionar.addEventListener('click', segundoMenu);

function segundoMenu() {
    htmlSegundoMenu.classList.remove('inactive');
    personajeUsuario.classList.add('inactive');
    htmlBatallaChat.classList.remove('inactive');
    

}
function elegirArma() {
    armaUsuario.classList.remove('inactive');
    personajeUsuario.classList.add('inactive');
}

