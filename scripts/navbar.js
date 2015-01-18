$(document).ready(function() {
    $(window).load(function() {
        /*
         * Replace all SVG images with inline SVG. This is useful for being able to
         * recolor SVG images with CSS. Credit to Drew Baker for writing this gem .
         */
        jQuery('img.svg').each(function(){
            var $img     = jQuery(this);
            var imgClass = $img.attr('class');
            var imgURL   = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });

        $('.imgContainer').on('mouseover', function() {
            $(this).find('.imgDesc').css('height', 'auto');
        });

        $('.imgContainer').on('mouseout', function() {
            $(this).find('.imgDesc').css('height', '3.2em');
        });
    });
});