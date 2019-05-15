$(function() {
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var scroll = this.hash;

            $("html, body").animate({
                scrollTop: $(scroll).offset().top
            }, 600, function() {
                window.location.hash = scroll;
            });
        }
    });

    $('[data-toggle="popover"]').popover();
});