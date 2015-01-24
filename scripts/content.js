$(document).ready(function() {
    $(window).load(function() {
        // Mark container we're hovering over as active
        $('.imgContainer, .documentContainer').on('mouseover', function() {
            $(this).addClass('hovering');
        });

        $('.imgContainer, .documentContainer').on('mouseout', function() {
            $(this).removeClass('hovering');
        });
    });
});