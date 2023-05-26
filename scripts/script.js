// Pagina principal // 
const personajeUsuario = document.querySelector('.personaje-usuario');
const htmlSegundoMenu = document.querySelector('.segundo-menu');
const perfilesJugadores = document.querySelector('.perfiles-jugadores');
const htmlBatallaChat = document.querySelector('.batalla-chat');
const htmlResultado = document.querySelector('.resultado');
const guardianDeLaRoca = document.getElementById('guardian input');
const maestroDeLasHojas = document.getElementById('maestro input');
const reinaDeLaCorte = document.getElementById('reina input');
const botonSeleccionar = document.querySelector('.start-btn');
const botonAtacar = document.querySelector('.atk-btn')

const inputGuardian = document.getElementById('guardian-input');
const inputMaestro = document.getElementById('maestro-input');
const inputReina = document.getElementById('reina-input');
const inputPiedra = document.getElementById('piedra-input');
const inputPapel = document.getElementById('papel-input');
const inputTijera = document.getElementById('tijera-input');

const vidasJugador = document.querySelector('.vidas-jugador');
const vidasComputadora = document.querySelector('.vidas-computadora');
const vidas5 = '❤❤❤❤❤'
const vidas4 = '❤❤❤❤'
const vidas3 = '❤❤❤'
const vidas2 = '❤❤'
const vidas1 = '❤'
let contadorVidasJugador = 5
let contadorVidasComputadora = 5


let pNombrePJ = document.getElementById('pj-name')

let jugadorArma
let computadoraArma
let computadora
let nombreJugador


function aleatorio() {
    computadora = Math.floor(Math.random() * 3) + 1;
    return computadora
}


// Inicio // 
htmlSegundoMenu.classList.add('inactive');
htmlResultado.classList.add('inactive');

// Frase pagina principal // 
let frasesMenuPrincipal = [
    "Prepárate para la batalla, el desafío está por comenzar.",
    "El destino te llama a la acción, selecciona tu equipo y adéntrate en la batalla.",
    "Elige sabiamente tus armas y prepárate para la épica contienda que se avecina.",
    "La guerra espera a los valientes, selecciona tu equipo y únete a la batalla.",
    "Antes de enfrentar al enemigo, elige tus herramientas con sabiduría y forja tu camino hacia la victoria."
]
let htmlFraseAleatoria = document.createElement('p');
let fraseAleatoria = obtenerFraseAleatoria(frasesMenuPrincipal);
htmlFraseAleatoria.innerHTML = fraseAleatoria;
htmlBatallaChat.appendChild(htmlFraseAleatoria);

function obtenerFraseAleatoria(frases) {
    var indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}


// Imagen del jugador // 
botonSeleccionar.addEventListener('click', chequearEleccionPersonaje);
function chequearEleccionPersonaje() {
    if (inputGuardian.checked || inputMaestro.checked || inputReina.checked) {
        segundoMenu()
    } else {
        alert("Selecciona un personaje")
    }
}

// Segundo menu // 
function segundoMenu() {
    htmlSegundoMenu.classList.remove('inactive');
    personajeUsuario.classList.add('inactive');


    let pjSelect = document.querySelector('.pj-select');


    if (inputGuardian.checked) {
        pjSelect.setAttribute('src', '../img/GUARDIAN DE LA ROCA.png')
        pNombrePJ.innerText = 'Guardian de la Roca'
        nombreJugador = 'Guardian de la Roca';
    } else if (inputMaestro.checked) {
        pjSelect.setAttribute('src', '../img/MAESTRO DE LAS HOJAS.png')
        pNombrePJ.innerText = 'Maestro de las Hojas'
        nombreJugador = 'Maestro de las Hojas';
    } else if (inputReina.checked) {
        pjSelect.setAttribute('src', '../img/REINA DE LA CORTE.png')
        pNombrePJ.innerText = 'Reina de La Corte'
        nombreJugador = 'Reina de La Corte';
    }
}


// ATAQUES COMBATE // 
botonAtacar.addEventListener('click', chequearEleccionAtaque)

function chequearEleccionAtaque() {
    if (inputPiedra.checked || inputPapel.checked || inputTijera.checked) {
        ataqueJugador()
    } else {
        alert("Selecciona un ataque")
    }
}

function ataqueJugador() {
    if (inputPiedra.checked) {
        jugadorArma = 'Piedra Dominante'
    } else if (inputPapel.checked) {
        jugadorArma = 'Hoja Cortante'
    } else if (inputTijera.checked) {
        jugadorArma = 'Tijera Vengadora'
    }
    ataqueComputadora()
}

function ataqueComputadora() {
    computadora = aleatorio()
    if (computadora == 1) {
        computadoraArma = 'Piedra Dominante'
    } else if (computadora == 2) {
        computadoraArma = 'Hoja Cortante'
    } else if (computadora == 3) {
        computadoraArma = 'Tijera Vengadora'
    }
    combate()
}

function combate() {
    if (jugadorArma == computadoraArma) {
        resultado = 'EMPATE'
        htmlFraseAleatoria.innerHTML = fraseAleatoriaEmpate()
    } else if ((jugadorArma == 'Piedra Dominante' && computadoraArma == 'Tijera Vengadora') || (jugadorArma == 'Hoja Cortante' && computadoraArma == 'Piedra Dominante') || (jugadorArma == 'Tijera Vengadora' && computadoraArma == 'Hoja Cortante')) {
        resultado = 'GANASTE'
        htmlFraseAleatoria.innerHTML = fraseAleatoriaGanadora()
        contadorVidasComputadora--
        vidasContador()
    } else {
        resultado = 'PERDISTE';
        htmlFraseAleatoria.innerHTML = fraseAleatoriaPerdedora()
        contadorVidasJugador--
        vidasContador()
    }

}

function vidasContador() {
    switch (contadorVidasJugador) {
        case 5:
            vidasJugador.innerHTML = vidas5
            break
        case 4:
            vidasJugador.innerHTML = vidas4
            break
        case 3:
            vidasJugador.innerHTML = vidas3
            break
        case 2:
            vidasJugador.innerHTML = vidas2
            break
        case 1:
            vidasJugador.innerHTML = vidas1
            break
        default:
            vidasJugador.innerHTML = '';
            botonAtacar.disabled = true;
            botonAtacar.setAttribute('id', 'disabled');
    }

    switch (contadorVidasComputadora) {
        case 5:
            vidasComputadora.innerHTML = vidas5
            break
        case 4:
            vidasComputadora.innerHTML = vidas4
            break
        case 3:
            vidasComputadora.innerHTML = vidas3
            break
        case 2:
            vidasComputadora.innerHTML = vidas2
            break
        case 1:
            vidasComputadora.innerHTML = vidas1
            break
        default:
            vidasComputadora.innerHTML = '';
            botonAtacar.disabled = true;
            botonAtacar.setAttribute('id', 'disabled');
    }
}

// Frases de batalla
function fraseAleatoriaGanadora() {
    let frasesGanadoras = [
        `<b>${nombreJugador}</b> aplasta al temible <b>Esqueleto Infernal</b> con su poderosa <b>${jugadorArma}</b>. El monstruo se retira acabado, mientras ${nombreJugador} celebra su victoria y se prepara para nuevos desafíos. <b>GANASTE</b>.`,

        `<b>${nombreJugador}</b> utiliza su astucia y la <b>${jugadorArma}</b> para derrotar al <b>Esqueleto Infernal</b>. El monstruo cae ante la estrategia de ${nombreJugador}, quien se erige triunfante en su victoria y continúa gobernando con firmeza. <b>GANASTE</b>.`,

        `<b>${nombreJugador}</b> desata su maestría en el combate con <b>${jugadorArma}</b> y vence al <b>Esqueleto Infernal</b>. El enemigo es derrotado, mientras ${nombreJugador} gracias a su victoria se convierte en una leyenda en el mundo de la batalla. <b>GANASTE</b>.`,

        `La valentía de <b>${nombreJugador}</b> se hace evidente cuando utiliza con maestría la <b>${jugadorArma}</b> contra el <b>Esqueleto Infernal</b>. El monstruo queda debilitado ante el poderoso ataque y ${nombreJugador} emerge como el vencedor con esta victoria. <b>GANASTE</b>`,

        `Con un movimiento certero, <b>${nombreJugador}</b> utiliza su <b>${jugadorArma}</b> para superar al <b>Esqueleto Infernal</b>. El monstruo se desmorona ante el impacto, mientras ${nombreJugador}se erige como una verdadera fuerza en esta encarnizada batalla, obteniendo una gloriosa victoria. <b>GANASTE</b>`,
    ]
    let fraseAleatoriaGanadora = obtenerFraseAleatoria(frasesGanadoras);
    return fraseAleatoriaGanadora
}

function fraseAleatoriaPerdedora() {
    let frasesPerdedoras = [
        `<b>${nombreJugador}</b> desata el poder de la <b>${jugadorArma}</b> contra el temible <b>Esqueleto Infernal</b>. Sin embargo, el Esqueleto Infernal responde con un feroz ataque de su <b>${computadoraArma}</b>. Lamentablemente, ${nombreJugador} sufre una derrota en esta épica batalla. <b>PIERDES</b>`,

        `<b>${nombreJugador}</b> desata la fuerza implacable de la <b>${jugadorArma}</b> contra el malévolo <b>Esqueleto Infernal</b>. Sin embargo, el Esqueleto Infernal se defiende hábilmente con su <b>${computadoraArma}</b>. ${nombreJugador} lucha valientemente, pero finalmente sufre una derrota en esta encarnizada batalla. <b>PIERDES</b>`,

        `<b>${nombreJugador}</b> invoca el poderío de la <b>${jugadorArma}</b> contra el aterrador <b>Esqueleto Infernal</b>. Pero el Esqueleto Infernal contraataca con su feroz <b>${computadoraArma}</b>. A pesar de la valentía de ${nombreJugador}, esta vez debe aceptar la derrota en esta épica confrontación. <b>PIERDES</b>`,

        `<b>${nombreJugador}</b> empuña la <b>${jugadorArma}</b> con destreza frente al imponente <b>Esqueleto Infernal</b>. Sin embargo, el Esqueleto Infernal contraataca con su letal <b>${computadoraArma}</b>. A pesar de la feroz lucha de ${nombreJugador}, finalmente no logra prevalecer y sufre una derrota en esta batalla intensa. <b>PIERDES</b>`,

        `<b>${nombreJugador}</b> libera su ataque más poderoso con la <b>${jugadorArma}</b>. Ambos combatientes desatan sus mejores habilidades, pero el <b>Esqueleto Infernal</b> se muestra implacable con su letal <b>${computadoraArma}</b>. A pesar de la valentía de ${nombreJugador}, su derrota se hace inevitable en esta encarnizada contienda. <b>PIERDES</b>`,

    ];

    let fraseperdedorarandom = obtenerFraseAleatoria(frasesPerdedoras);
    return fraseperdedorarandom
}

function fraseAleatoriaEmpate() {
    let frasesEmpate = [
        `<b>${nombreJugador}</b> y el <b>Esqueleto Infernal</b> desatan el poderío de la <b>${jugadorArma}</b> en un enfrentamiento épico. Sus ataques chocan con una fuerza arrolladora, pero ninguno de ellos logra prevalecer. La batalla termina en un empate, dejando a ambos luchadores exhaustos pero determinados a continuar la lucha. <b>EMPATE</b>.`,

        `<b>${nombreJugador}</b> y el <b>Esqueleto Infernal</b> se enfrentan usando la <b>${jugadorArma}</b> como arma principal. Sus movimientos son rápidos y precisos, pero ninguno de ellos logra obtener la ventaja sobre el otro. La batalla termina en un empate, dejando a ambos con la determinación de superarse en el siguiente encuentro. <b>EMPATE</b>.`,

        `<b>${nombreJugador}</b> y el <b>Esqueleto Infernal</b> se enfrentan con la <b>${jugadorArma}</b>, demostrando su destreza en el combate. Los filos chocan en un duelo impresionante, pero ninguno logra ganar la batalla. El enfrentamiento termina en un empate, dejando a ambos guerreros con la sensación de que aún hay mucho por demostrar. <b>EMPATE</b>.`,

        `<b>${nombreJugador}</b> y el <b>Esqueleto Infernal</b> libran un duelo impresionante con la <b>${jugadorArma}</b> como su arma principal. Sus movimientos son ágiles y precisos, entrelazando sus filos en una danza de habilidad y destreza. Sin embargo, ninguno de ellos logra alcanzar la victoria, y el enfrentamiento termina en un empate. Ambos guerreros se retiran con la determinación de superarse en la siguiente ronda. <b>EMPATE</b>.`,

        `<b>${nombreJugador}</b> y el <b>Esqueleto Infernal</b> se enfrentan con sus letales <b>${jugadorArma}</b> en una batalla llena de velocidad y agilidad. Sus movimientos son rápidos y precisos, sin embargo, ninguno logra obtener la ventaja sobre el otro. La batalla culmina en un empate, dejando a ambos guerreros con la sensación de que aún hay mucho por demostrar en futuros encuentros. <b>EMPATE</b>.`

    ]

    let fraseAleatoriaEmpate = obtenerFraseAleatoria(frasesEmpate);
    return fraseAleatoriaEmpate
}




