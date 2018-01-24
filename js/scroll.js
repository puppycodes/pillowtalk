$('a[href^="#"]:not(a[href="#"])').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;

});

$(function () {
    var currentHash = "#home"
    $(document).scroll(function () {
        $('.hash').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var hash = $(this).attr('name');

            if (distance < 30 && distance > -30 && currentHash != hash) {
                window.location.hash = (hash);
                currentHash = hash;
                console.log(hash);
            }

        });
    });
});
