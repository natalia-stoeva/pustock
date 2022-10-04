let browseCategories = document.getElementById('browseCategories');
let categoriesMenu = document.getElementById('categoriesMenu');

function hideCategoriesMenu () {
    if (categoriesMenu.style.visibility === "hidden") {
        categoriesMenu.style.visibility = "visible";
      } else {
        categoriesMenu.style.visibility = "hidden";
      }
    }  
browseCategories.addEventListener('click', hideCategoriesMenu)

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin:10,
    nav: true,
    items:1,
    dots: true    
  });
});



