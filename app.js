//para no usar esto es mejor una funcion que inserte texto al h1 y al parrafo
/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "ingrese un numero del 1 al 10";*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignasTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignasTextoElemento(
      "p",
      `acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //usuario no acerto
    if (numeroUsuario > numeroSecreto) {
      asignasTextoElemento("p", "el numero secreto es menor");
    } else {
      asignasTextoElemento("p", "el numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //si ya sorteamos todo los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignasTextoElemento("p", "ya se sortearon todo los numeros ");
  } else {
    //si el numero generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignasTextoElemento("h1", "juego del numero secreto");
  asignasTextoElemento("p", `ingrese un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de intervalo
  //inicializar el numero de intentos
  //generar numero aleatorio
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
