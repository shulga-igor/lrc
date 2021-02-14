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
      $('.second-part').show();
      odometer();
    }, 4000);

    setInterval(function(){
      $('.second-part').addClass('fsh');
    }, 6900);
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
      $('.smiles-wrap').addClass('show-anim');
      showColoredBlc();


    } else {
      $("#email").css("border-color", "red");
    }
    return false;
  }
  

  var block = $('.js-name span');
    var arrowName = ['Dennis', 'Howard', 'Steven', 'Yasin', 'Finn', 'Knox', 'Xever',
      'Sterling', 'Harper', 'Elijah', 'Uzziel', 'Prince', 'Luis', 'Yusif', 'Vince', 'Major', 'Vincenzo', 'Oscar', 'Oshea', 'Axel', 'David',
      'Jace', 'Sullivan', 'Floyd', 'Matthew', 'Dalton', 'Giovani', 'Selah', 'Robert', 'Norman', 'Izaac', 'Yasir', 'Carlos', 'Bowen',
      'Zeppelin', 'Kobe', 'Wes', 'Uri', 'Wyatt', 'Francesco', 'Xandro', 'Miguel', 'Pierre', 'Emery', 'Harvey', 'Xandro', 'Theodore', 'Dennis',
      'Uziah', 'Arthur', 'Marco', 'Jason', 'Luis', 'Woodrow', 'Jaxson', 'Nikko', 'Finlee', 'Xan', 'Zac', 'Vincent', 'Trevor', 'Tucker', 'Samson',
      'Troy', 'Zeus', 'Isaac', 'Simon', 'Nathanael', 'Timothy', 'Pearson', 'Pembroke', 'Branson', 'Dean', 'Fernando', 'Isaak', 'Porter', 'Everett',
      'Yukio', 'William', 'Gregory', 'Santiago', 'Theodore', 'Edward', 'Wylie', 'Raiden', 'Xenos', 'Tadeo', 'King', 'Felipe', 'Samir', 'Xenos', 'Neal',
      'Soren', 'Keegan', 'Usher', 'Neal', 'Presley', 'Ben', 'Brody'];
    var ArrayLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
    var arrCity = ['Liverpool', 'Manchester', 'Leicester', 'Southampton', 'Birmingham', 'London', 'Sheffield', 'Newcastle', 'Leeds', 'Bradford', 'Bristol', 'Sunderland', 'Wolverhampton', 'Glasgow', 'Edinburgh', 'Belfast'];

    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

    function resultRandomName(){
      var randomName =  randomInteger(0, 98);
      var randomLetter =  randomInteger(0, 25);
      var randomCity =  randomInteger(0, 15);
      var resultName = arrowName[randomName] + ' ' + ArrayLetter[randomLetter] + ', ' + arrCity[randomCity];
      block.text(resultName);
    }

    resultRandomName();
    setInterval(function(){
      resultRandomName();
    }, 4000)


    
})