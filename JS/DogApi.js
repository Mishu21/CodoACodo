//change the limit to however many images to use
const url1 = ` https://api.thedogapi.com/v1/images/search?limit=3&size=medium`;
const api_key1 = "live_45GrucpOIRL6zbddocD9XdPMaUG7iqNTAz1ij7xfA2LQCXONSNea4FtwLNnTHMBW"

 fetch(url1,{headers: {
      'x-api-key': api_key1
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
 
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});
