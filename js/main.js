$(function(){
    var current = location.pathname;
    var home = "/";
    $('.site-nav a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    });

    $('.site-nav a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if(current == home){
            $this.removeClass('active');
        }
    });
});
