(function($) {
  var $win = $(window), //cache the window element
    $box = $('.box'),   //cache the .box element
    wh = $win.height(),
    midPoint = wh * 0.5,
    gridTop = wh * 0.4,
    gridBottom = wh * 0.6;

  /*
   *  Function: drawFix
   *  order z-index to draw DOM .blox elements as expected.
   */
  function drawFix() {
    $('.blox').each(function(index) {
      var $this = $(this),
        thisTop = $this.offset().top - $win.scrollTop();

      // Check if the midPoint is within $this element.
      if (midPoint >= thisTop && midPoint <= thisTop + $this.height()) {
        $this.css('z-index', 200);
      } else {
        $this.css('z-index', 100);
      }
    }); //each

  }

  //run drawFix() onscroll
  $box.on('scroll', function() {
    drawFix();
  });
  //call once before any scrolling happens.
  drawFix();

})(jQuery);
