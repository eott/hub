$(document).ready(function() {
    $(window).load(function() {
        // Mark container we're hovering over as active
        $('.cardPlacement').on('mouseover', function() {
            $(this).addClass('hovering');
        });

        // Unmark again
        $('.cardPlacement').on('mouseout', function() {
            $(this).removeClass('hovering');
        });
    });
});