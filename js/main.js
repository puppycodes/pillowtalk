
$(function(){
    var current = window.location.hash;
    $('a.page-link').each(function(){
        var $this = $(this);
        if($this.attr('href').indexOf(current)!== -1){
            $this.addClass('active');
        }
        else {
              $this.removeClass('active');
        }
    });

});

$(window).on('hashchange', function() {

  var current = window.location.hash;
  $('a.page-link').each(function(){
      var $this = $(this);
      if($this.attr('href').indexOf(current)!== -1){
          $this.addClass('active');
      }
      else {
            $this.removeClass('active');
      }
  });

});


$(window).on('load', function() {
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  window.location.hash = 'home';
});
