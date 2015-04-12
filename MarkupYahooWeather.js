(function($) {

    $.fn.tooltip = function(options) {

        var set = $.extend( {
            'speed' : 150
        }, options);

        return this.each(function() {

            var tooltip = '.tooltip-wrapper';

            $(this).hover(function() {

                var html = '<div class="tooltip-wrapper"><div class="tooltip-arrow"><div class="tooltip-content">' + $(this).attr('data-tooltip') + '</div></div></div>';

                $(this).append(html);

                var marginLeft = ($(this).width() / 2) - ($(tooltip).outerWidth() / 2);

                $(tooltip).css('margin-left', marginLeft + 'px');

                $(tooltip).fadeIn(set.speed);

            }, function() {

                $(tooltip).remove();

            }

        );

    });

};

})(jQuery);

$(document).ready(function() {
    $('.weather-tooltip').tooltip();
});