$(document).ready(function(e){

  $('.first-question-slider').slick({
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
    swipe: false
  });
    

  $(document).on('click', '.next-slide', function(e){
    e.preventDefault();
    console.log('asdasd');
    $(".first-question-slider").slick('slickNext');
  })
  
    
})