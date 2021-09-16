let photo=document.getElementsByClassName('item')
let activeimage=document.getElementsByClassName("active")
for(var i=0;i<photo.length;i++){
    photo[i].addEventListener('click',function(){
        document.getElementById('zippy-photo').src=this.src
    })
}
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        items : 6, //10 items above 1000px browser width
        itemsDesktop : [1000,6], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,6], // betweem 900px and 601px
        itemsTablet: [600,5], //2 items between 600 and 0;
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
   
  });