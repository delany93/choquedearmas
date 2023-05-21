let usuario 
let pcENEMY = Math.floor(Math.random() * 3) + 1;

let personajeUsuario = document.querySelector('.personaje-usuario')
let armaUsuario = document.querySelector('.arma-usuario');
armaUsuario.classList.add('inactive');


// Frase pagina principal // 
let frases = [
    "Prepárate para la batalla, el desafío está por comenzar.",
    "El destino te llama a la acción, selecciona tu equipo y adéntrate en la batalla.",
    "Elige sabiamente tus armas y prepárate para la épica contienda que se avecina.",
    "La guerra espera a los valientes, selecciona tu equipo y únete a la batalla.", 
    "Antes de enfrentar al enemigo, elige tus herramientas con sabiduría y forja tu camino hacia la victoria."
]
let htmlBatalla = document.querySelector('.batalla');
let htmlFraseAleatoria = document.createElement('p');
let fraseAleatoria = obtenerFraseAleatoria();

htmlFraseAleatoria.innerHTML = fraseAleatoria;
htmlBatalla.appendChild(htmlFraseAleatoria);

function obtenerFraseAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
    }

// 
let guardianDeLaRoca = document.getElementById('roca');
guardianDeLaRoca.addEventListener('click', elegirArma);
let maestroDeLasHojas = document.getElementById('papel');
maestroDeLasHojas.addEventListener('click', elegirArma)
let reinaDeLaCorte = document.getElementById('tijera');
reinaDeLaCorte.addEventListener('click', elegirArma);

function elegirArma() {
    armaUsuario.classList.remove('inactive');
    personajeUsuario.classList.add('inactive');
}

