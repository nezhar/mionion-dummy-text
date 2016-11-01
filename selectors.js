(function ($) {
    "use strict";

    $('input[type="text"]').each(function() {
    	$(this).val( mdt.randomText(2) );
    });

    $('textarea').each(function() {
    	$(this).val( mdt.randomText(50) );
    });

    $('input[name*="mail"]').each(function() {
    	$(this).val( mdt.randomEmail() );
    });

    $('input[type="checkbox"]').each(function() {
    	$(this).prop( 'checked', mdt.randomBool() );
    });

})(jQuery);
