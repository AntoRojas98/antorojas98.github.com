//QUE EL VIDEO SE REPRODUZCA MIENTRAS EL MOUSE ESTA SOBRE EL
//var player = document.getElementById("video")


//playerStarted.addEventListener("onmouseover", playerStarted);
//playEnded.addEventListener("onmouseout", playEnded);

//function playerStarted() {
//      player.play();
//}

//function playerEnded() {

//}


//QUE SE REPRODUZCA UN AUDIO MIENTRAS EL MOUSE ESTA SOBRE EL COLLAGES_1
//var audio = document.getElementById("Audio")


//audioStarted.addEventListener("onmouseover", audioStarted);
//audioEnded.addEventListener("onmouseout", audioEnded);

//function audioStarted() {
//    audio.play();
//}

//function audioEnded() {

//}




// QUE CUANDO APRETE UNA IMAGEN ESTA SE AGRANDE
var imagenes = document.querySelectorAll(".imagen__img");
var modal = document.querySelector("#modal");
var img = document.querySelector("#modal__img");
var boton = document.querySelector("#modal__boton");
var botonNext = document.querySelector("#modal__botonNext");

for (var i = 0; i < imagenes.leght; i++){
  imagenes[i].addEventListener("click",function(){
    modal.classList.toggle("modal--opne");
  })
}





//FUNCION DE EL BOTON X




//QUE AL APRETAR LA IMAGEN CAMBIE A LA SIGUIENTE
