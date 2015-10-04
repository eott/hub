$(document).ready(function() {
    $(window).load(function() {
        // Mark container we're hovering over as active
        $('.imgPlacement, .documentContainer').on('mouseover', function() {
            $(this).addClass('hovering');
        });

        $('.imgPlacement, .documentContainer').on('mouseout', function() {
            $(this).removeClass('hovering');
        });
    });
});