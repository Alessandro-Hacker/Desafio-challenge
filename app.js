const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar =  document.getElementById('copiar');
const txtmensaje =  document.getElementById('txtMensaje');
const txtrespuesta = document.getElementById('txtRespuesta');

function activarRespuesta() {
  // Oculta el primer elemento con la clase 'img_mensaje'
  const imgMensaje = document.querySelector('.img_mensaje');
  if (imgMensaje) imgMensaje.style.display = 'none';
  
  // Muestra el primer elemento con la clase 'respuesta_boton'
  const respuestaBoton = document.querySelector('.respuesta_boton');
  if (respuestaBoton) respuestaBoton.style.display = 'flex';
}

function activarImagen(){
  // Oculta el primer elemento con la clase 'img_mensaje'
  const imgMensaje = document.querySelector('.img_mensaje');
  if (imgMensaje) imgMensaje.style.display = 'inline';
  
  // Muestra el primer elemento con la clase 'respuesta_boton'
  const respuestaBoton = document.querySelector('.respuesta_boton');
  if (respuestaBoton) respuestaBoton.style.display = 'none';
}

function onEncriptar() {
  let contenido = txtmensaje.value;
  console.log(contenido);
  if(contenido != ''){
    txtrespuesta.value  = contenido;
    activarRespuesta();
  }
  
}

function onDesencriptar() {
  let contenido = txtmensaje.value;
  console.log(contenido);
  if(contenido != ''){
    txtrespuesta.value  = contenido;
    activarRespuesta();
  }
  
}

function onCopiar(){
  let contenido  = txtmensaje.value;
  if(contenido != ''){
    activarImagen();
  }
}

// AGREGANDO EVENTOS A LOS BOTONES.
encriptar.addEventListener('click', onEncriptar);
desencriptar.addEventListener('click', onDesencriptar);
copiar.addEventListener('click',activarImagen);

