// Baquette box 

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

// Search pictures


let searchBox = document.querySelector("#searchBox");
let photos = document.querySelectorAll("a");
let items = document.getElementsByClassName("item");


searchBox.addEventListener("keyup", () => {
    for ( let i = 0; i < photos.length; i++) {
        if (photos[i].dataset.caption.toLowerCase().includes(searchBox.value.toLowerCase())){
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
        
    }
}); 
    
    


 






