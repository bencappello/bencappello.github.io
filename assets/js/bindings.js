(function($) {

  // $('#header').addClass('sticky-bar');

  var bindStickyNav =  function () {
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > 0) {
        $('#header').addClass('sticky-bar');
      }
      else {
        $('#header').removeClass('sticky-bar');
      }
    });
  }();

})(jQuery);
