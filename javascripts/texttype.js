$.fn.teletype = function(opts){
    var $this = this,
        defaults = {
            animDelay: 50
        },
        settings = $.extend(defaults, opts);
    
    $.each(settings.text.split(''), function(i, letter){
        setTimeout(function(){
            $this.html($this.html() + letter);
        }, settings.animDelay * i);
    });
};

$(function(){
    $('#container').teletype({
        animDelay: 50,
        text: 'Now is the time for all good men to come to the aid of their country...'
    });
});
