
//QUE SE REPRODUZCA UN AUDIO MIENTRAS EL MOUSE ESTA SOBRE EL COLLAGES_1
//El COLLAGE ES EL BOTON DE REPRODUCIR AUDIO
// playAudio= boton -- audio= audio






//QUE EL VIDEO SE REPRODUZCA MIENTRAS EL MOUSE ESTA SOBRE EL
// EL VIDEO ES EL BOTON
// playVideo= boton -- video = video
var playVideo = document.getElementById("playVideo");
var video = document.getElementById('video');



let options ={
  root: null,
  rootMargin: "0px",
  threshold: 1.0
}
let callback = (entries, observer)=>{
  entries.forEach(entry=> {
    if (entry.tragetid== "video"){
      if(entry.isIntersecting){
        entry.traget.play();
      }
      else{
        entry.target.pause();
      }
    }
  });
}

let observer = new IntersectionObserver(callback, options);
observer.observe(document.getElementById('video'));



// QUE CUANDO APRETE UNA IMAGEN ESTA SE AGRANDE
var imagenes = document.querySelectorAll(".imagen__img");
var modal = document.querySelector("#modal");
var img = document.querySelector("#modal__img");
var boton = document.querySelector("#modal__boton");
var botonNext = document.querySelector("#modal__botonNext");

for (var i = 0; i < imagenes.leght; i++){
  imagenes[i].addEventListener("click",function(e){
    modal.classList.toggle("modal--open");
    var src = e.target.sr;
    img.setAtrribute("src", src);
  });
}
//boton.addEventListener("click", function(){
 //   modal.clasList.toggle("modal--open");
//});




//FUNCION DE EL BOTON X




//QUE AL APRETAR LA IMAGEN CAMBIE A LA SIGUIENTE
