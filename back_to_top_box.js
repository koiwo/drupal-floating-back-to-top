(function ($) {
  Drupal.behaviors.BackToTopBox = {
    attach: function (context, settings) {

      $('body').append('<a href="#" class="back-to-top"></a>');

      var offset = 220;
      var duration = 500;
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.back-to-top').fadeIn(duration);
          } else {
              jQuery('.back-to-top').fadeOut(duration);
          }
      });
      
      jQuery('.back-to-top').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      })

      // http://www.developerdrive.com/2013/07/using-jquery-to-add-a-dynamic-back-to-top-floating-button-with-smooth-scroll/
    }
  };
}) (jQuery);