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
      validate();
      
    }else{
      $(".first-question-slider").slick('slickNext');
    }
  })
  
  $(document).on('click', '.switch-pstcd-input', function(e){
    e.preventDefault();
    $('.switch-postcode').toggle();
  })


  function showColoredBlc(){
    setTimeout(function(){
      $('.first-part').hide();
    }, 4000);
    setInterval(function(){
      $('.second-part').show();
      odometer();
    },4000);
    setInterval(function(){
      $('.second-part').addClass('fsh');
    }, 7000);
    setInterval(function(){
      $('.colored-blocks').addClass('slide');
    }, 9000);
    
  }


  function odometer(){
    var el = document.querySelector('.code');

    od = new Odometer({
      auto: false,
      el: el,
      value: 11111111,
      format: 'd',
      duration: 5000,
      theme: 'default'
    });

    od.update(95684234);
  }
  $(document).on('click', '.finish-btn', function(e){
    e.preventDefault();
    $('.success').show();
    setTimeout(function(){
      $('.step-one-finish').hide();
      $('.step-finish').show();
    }, 3000);
    
  })


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const email = $("#email").val();

    if (validateEmail(email)) {
      $('.colored-blocks').addClass('show');
      $(".first-question-slider").slick('slickNext');
      showColoredBlc();


    } else {
      $("#email").css("border-color", "red");
    }
    return false;
  }
  

  var block = $('.js-name span');
    var arr = ['Bennett S, Liverpool', 'Cayden G, Manchester', 'Vincenzo M, Leicester', 'Matias H, Southampton', 'Santino G,Birmingham', 'Brendan A, Manchester', 'David A, Southampton', 'Keegan H, Birmingham', 'Xandros P, Leicester', 'Brycen C, Liverpool', 'Gregory T, London'];
    var i = 0;

    
    var intv = setInterval(function() {
        if (i >= arr.length) {
            clearInterval(intv);
        } else {
            block.text(arr[i]);
            ++i;
        }
    }, 4000);
    
})