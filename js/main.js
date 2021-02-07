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
    if($(this).hasClass('start-colored')){
      $('.colored-blocks').addClass('show');
      $(".first-question-slider").slick('slickNext');
    }else{
      $(".first-question-slider").slick('slickNext');
    }
  })
  
  $(document).on('click', '.switch-pstcd-input', function(e){
    e.preventDefault();
    $('.switch-postcode').toggle();
  })
  

    
})