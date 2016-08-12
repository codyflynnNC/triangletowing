$(function() {
  $("#header").load("header.html");
  $("#testphp").load("test.php");
});

$(document).ready(function() {
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
          comment: {
              validators: {
                    stringLength: {
                      min: 10,
                      max: 200,
                      message:'Please enter at least 10 characters and no more than 200'
                  },
                  notEmpty: {
                      message: 'Please supply a description of your project'
                  }
                  }
              }
          }
       })
      });
