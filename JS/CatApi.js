const url = `https://api.thecatapi.com/v1/breeds`;
   const api_key = "live_j9UhjlyVBX2EVZD5nMY0r7aW22CLD9HNvnm8m3g8a2WtLmgNPFaazo4yVIJrJYUJ"
  
let storedBreeds = []
   var num;
  
/**
 * Funcion para cambiar la imagen
 */
 function rotarImagenes()
 {

  fetch(url,{headers: {
    'x-api-key': api_key
  }})

.then((response) => {
 return response.json();
})
.then((data) => {

data = data.filter(img=> img.image?.url!=null)
 
storedBreeds = data;

   // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
   var index=Math.floor((Math.random()*storedBreeds.length));
 
   // cambiamos la imagen
   document.getElementById("img").src=storedBreeds[index].image.url;
  })
  .catch(function(  error) {
     console.log(error);
  });
}

  /**
  * Función que se ejecuta una vez cargada la página
  */
 onload=function()
 {
   // Cargamos una imagen aleatoria
   rotarImagenes();
 
   // Indicamos que cada 5 segundos cambie la imagen
   setInterval(rotarImagenes,5000);
 

 }
