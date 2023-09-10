var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // nevbar 
  var snav = document.getElementById("sidenav");
  var menu = document.getElementById('menubar');

  var flag = 0;

  menu.addEventListener("click", function(){ 
    if( flag == 0){
      snav.style.width = "260px";
      flag = 1; 
      
    }
    else{
      snav.style.width = "0px";
      flag = 0;
      
    }
   
  });
  
  
  
  
  
  

  


