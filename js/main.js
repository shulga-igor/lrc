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
    var arrowName = ["James F, ABERDEEN", "Dave L, SALTBURN-BY-THE-SEA", "Adriana J, LONDON", "David R, London", "David M, Manchester", "Carol H, Chippenham", "Kirsty J, BRISTOL", "Ronald C, ST. NEOTS", "Mark I, Nottingham", "Abdul I, London", "billy C, DUDLEY", "jake M, Milton Keynes", "Emma M, Lydbrook", "Madalin B, Birmingham", "David I, London", "Yvette M, LINCOLN", "Monica D, COVENTRY", "Kelly B, SWANSEA", "Julie H, WHITLEY BAY", "RAMONA D, ILFORD", "Peter C, GRAVESEND", "Heather R, Glasgow", "Tharfis S, Canterbury", "Jamie M, CANTERBURY", "Sofia J, Birmingham", "Simon B, Walsall", "Gordon M, SUTTON", "Lisa M, Poole", "Jessica S, SANDOWN", "Leslie B, Kilmarnock", "Jackie C, Liverpool", "Louii M, WARRINGTON", "Mark A, DORCHESTER", "Mark H, BINGLEY", "Rhonda P, Belfast", "Tracey F, Leek", "Lina L, LONDON", "Katie W, Hull", "Peter M, Melton Constable", "Petr K, Salford", "Claire L, SOUTHAMPTON", "Kelly H, TROWBRIDGE", "David R, BUCKIE", "Georgina B, Dartford", "Carla C, Reading", "Sarah F, BOOTLE", "Jane L, Bristol", "Marie T, GLASGOW", "Yeasin M, Coventry", "Richard B, SHEFFIELD", "wendy B, Aldershot", "Megan R, Stalybridge", "Philip H, London", "Thomas F, St. Neots", "irene H, DUNDEE", "Alison R, Ashford", "Sonita B, LONDON", "Jorja B, Halesowen", "Elaine W, Macclesfield", "Pauline S, SHEFFIELD", "Louise W, DURHAM", "Donna B, WALSALL", "Sharon K, Hull", "FERNANDO P, EDINBURGH", "Emma B, ELY", "William B, Hailsham", "Sandra T, PERTH", "Annemarie C, Wigan", "Danielle A, GATESHEAD", "Anthony P, Leeds", "Karen T, TELFORD", "Emma F, BANBURY", "Samuel C, BICESTER", "Justin M, HALESOWEN", "Christopher B, DAVENTRY", "Richard M, Bruton", "Lisa L, NORWICH", "Jamie P, NOTTINGHAM", "Hannah K, SOUTHAMPTON", "Natalia T, Coventry", "Lori R, Edinburgh", "darren W, London", "Ruth D, Edinburgh", "Teresa V, Northampton", "Brendan W, Didcot", "Sierra O, London", "Amy J, Bath", "Liam S, ANDOVER", "Pauline S, LEEDS", "Alisha R, READING", "Jodi F, RIPLEY", "Maya W, HAYES", "Kelly A, Wakefield", "Sarah C, STALYBRIDGE", "Raymond M, ELLESMERE PORT", "Pam G, PETERBOROUGH", "Janice L, Kingsbridge", "Joanne L, St. Helens", "Glenda M, DUNSTABLE", "Joe B, LONDONDERRY"];
   
    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

    function resultRandomName(){
      var randomName =  randomInteger(0, 99);
      var resultName = arrowName[randomName];
      block.text(resultName);
    }

    resultRandomName();
    setInterval(function(){
      resultRandomName();
    }, 4000)


    
})