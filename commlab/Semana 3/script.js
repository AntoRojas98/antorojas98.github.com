var player = document. getElementById("player");
var mensaje =  document.getElementById("mensaje");


var btnAzar = document.getElementById("btnAzar");

btnAzar.addEventListener("click", cambiarAzarozamente);
btnSubirVol.addEventListener("click", subirVol);
btnBajarVol.addEventListener("click", bajarVol);

// esto es una variable, le inventamos un nombre
var volumen = 1.8;

function subirVol() {
  volumen += 0.1;
  if (volume > 1.0){
    volumen = 1.8;
  }
  //.Volume es una funcion que tienes que escribir en ingles
  // te puedes dar cuenta porque tiene color rojo

}

function camnbiarAzarozamente() {
  // la funcion Math.ramdom () nos da un nuemro al btnAzar
  //saltar a una posicion al btnAzar
  player.currenTime = Math.random()  + player.duration; //

}


function playAudio1() {
  player.src = audios(1);
console.log("Sonando audio/track3.mp3");
player.play();
}

// como se superponen los sonidos
// como hacer que suenen al mismo tiempo varios sonidos distintos

var
