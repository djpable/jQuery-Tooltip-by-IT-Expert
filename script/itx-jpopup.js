/*
TODO: 
    - Opera check
    - Re-position AFTER window resize
    
var Opera = /opera/i.test(navigator.userAgent);
if (Opera) {
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "inc/jquery-plugins/itx-jpopup/itx-jpopup-alloggio-ie9.css");
    document.getElementsByTagName("head")[0].appendChild(link);
}
*/
(function($){ 
    var debug = false;
    
    var methods = {
        init: function(options) {
            
            var settings = {
                width: 120,
                height: 120,
                position: {
                    my: 'center bottom',
                    at: 'center top',
                    collision: 'none none'
                }
            };

            return this.each(function() {
         
                var time = 250, 
                    hideDelay = 500,
                    hideDelayTimer = null,
                    beingShown = false,
                    shown = false,
                    trigger = $(this),
                    popup = trigger.next('.popup');
                    
                $.extend(true, settings, {
                    content: trigger.attr('title') === undefined ? '' : trigger.attr('title'),
                    position: {
                        of: trigger
                    },
                    onShow: function(trigger, popup) {}
                });
                options && $.extend(true, settings, options);
                    
                if (popup.length == 0) { // Singleton
                    popup = $(
                        '<div class="popup" style="width:' + settings.width +
                        'px;height:' + settings.height + 
                        'px"><table><tbody><tr><td id="topleft" class="corner"></td><td class="top"></td><td id="topright" class="corner"></td></tr><tr><td class="left"></td><td class="center"><div class="popup-content">' +
                        settings.content +
                        '</div></td><td class="right"></td></tr><tr><td class="corner" id="bottomleft"></td><td class="bottom">' + 
                        (settings.position.my == 'center bottom' && settings.position.at == 'center top' ? '<img width="30" height="29" alt="popup tail" src="script/themes/coda/bubble-tail2.png"/>' : '') +
                        '</td><td id="bottomright" class="corner"></td></tr></tbody></table></div>'
                    );
                    trigger.after(popup);
                    popup.position(settings.position);
                }

                if (!debug) {
                    popup.hide().css('opacity', 0);

                    $([trigger.get(0), popup.get(0)]).mouseover(function() {
                        if (hideDelayTimer) clearTimeout(hideDelayTimer);
                        if (beingShown || shown) {
                            // don't trigger the animation again
                            return;
                        } else {
                            // reset position of info box
                            beingShown = true;

                            popup.css({
                                display: 'block'
                            }).animate({
                                opacity: 1
                            }, time, 'swing', function() {
                                beingShown = false;
                                shown = true;
                            });
                
                            settings.onShow(trigger, popup);
                        }

                        return false;
                    }).mouseout(function () {
                        if (hideDelayTimer) clearTimeout(hideDelayTimer);
                        hideDelayTimer = setTimeout(function() {
                            hideDelayTimer = null;
                            popup.animate({
                                opacity: 0
                            }, time, 'swing', function () {
                                shown = false;
                                popup.css('display', 'none');
                            });

                        }, hideDelay);
                    });
                }
            });
        }
    };
    
    $.fn.itx_popup = function(method) {
    
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.itx_popup' );
            return undefined;
        }    
    };
})( jQuery );