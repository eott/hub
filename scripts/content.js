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

        // Simple slider logic: Cut off elements from the front/back
        // and append/prepend them on the other end
        $('#newEntryPrevious').on('click', function() {
            $('#newEntryList li:last-child').prependTo($('#newEntryList'));
        });

        $('#newEntryNext').on('click', function() {
            $('#newEntryList li:first-child').appendTo($('#newEntryList'));
        });
    });
});