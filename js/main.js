$(function() {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

$(window).scroll(function(e){
  var $el = $('#callUsImg');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 ){
    $('#callUsImg').css({'display': 'none'});
    $('#callUsImgFixed').css({'display': 'block','position': 'fixed', 'top': '0px', 'left' : '10px', 'background-color' : 'rgba( 0, 0, 0, .8)', 'border-radius':'15px'});
    $('#callUsImgFixed').addClass("animated bounceInRight");
  }

  if ($(this).scrollTop() < 200 )
  {
    $('#callUsImgFixed').css({'display': 'none', 'position': 'static', 'top': '0px'});
    $('#callUsImg').css({'display': 'block'});
  }
});



window.onload = function() {
  var location = new GMaps({
      div: '#map',
      lat: 35.7651663,
      lng: -78.6292712,
      zoom: 9
    });
    location.setOptions(
      {
        draggable: false
      });


    location.addMarker({
      lat: 35.8051663,
      lng: -78.6292712,
      title: 'Click to see Triangle Towing Service\'s google maps page.',
      click: function(e) {
        var win = window.open('http://stackoverflow.com/', '_blank');
  if (win) {
     //Browser has allowed it to be opened
     win.focus();
  } else {
     //Browser has blocked it
     alert('A popup blocker has blocked this link. If you would like to visit anyways please go here www.google.com');
  }
      }
    });

/*
  Circle = location.drawCircle({
    lat: 35.8165686,
    lng: -78.6459253,
    radius: 8000,  //350 meters
    strokeColor: '#000',
    strokeOpacity: 1,
    strokeWeight: 2,
    fillColor: '#EEE',
    fillOpacity: 0.5
  }); */

};

$(document).ready(function() {

  $('.whiteHover').hover(function(){
    $(this).toggleClass('white-background');
  });




  $(".content").on("click", "#alertButton", function() {
  console.log("we clicked the alert");
  $("#submitButton").css("display", "inline-block");
  })

  var $objHead = $( 'head' );

  // define a function to disable zooming
  var zoomDisable = function() {
      $objHead.find( 'meta[name=viewport]' ).remove();
      $objHead.prepend( '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />' );
  };

  // ... and another to re-enable it
  var zoomEnable = function() {
      $objHead.find( 'meta[name=viewport]' ).remove();
      $objHead.prepend( '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />');
  };

  // if the device is an iProduct, apply the fix whenever the users touches an input
  if( navigator.userAgent.length && /iPhone|iPad|iPod/i.test( navigator.userAgent ) ) {
      // define as many target fields as your like
      $( ".input-group" )
          .on( { 'touchstart' : function() { zoomDisable() } } )
          .on( { 'touchend' : function() { setTimeout( zoomEnable , 500 ) } } );
   }


  $('#contact-form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },

          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          phone: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your phone number'
                  },
                  phone: {
                      country: 'US',
                      message: 'Please supply a vaild phone number with area code'
                  }
              }
          },
          zip: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your zip code'
                  },
                  zipCode: {
                      country: 'US',
                      message: 'Please supply a vaild zip code'
                  }
              }
          },
          message: {
              validators: {
                    stringLength: {
                      min: 5,
                      max: 500,
                      message:'Please enter at least 5 characters and no more than 500'
                  },
                  notEmpty: {
                      message: 'Please supply a description of your project'
                  }
                  }
              }
          }
       })
     }); /*Document ready*/
