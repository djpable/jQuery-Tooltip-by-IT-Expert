# Intro

jQuery-tooltip is a simple jQuery plugin to create tooltips.

Waiting the new jQuery UI framework, here comes a customizable tooltip based on jQuery UI provided by [IT-Expert](http://www.it-expert.it "IT-Expert di Paolo Mazzoni")

# Usage

Include your theme and the main JS file in your header (coda theme):  

    <link type="text/css" rel="stylesheet" media="screen" href="script/themes/coda/coda.css" />
    <script type="text/javascript" src="script/itx-jpopup.js"></script>

or (Alloggio.it theme):

    <link type="text/css" rel="stylesheet" media="screen" href="script/themes/alloggio/alloggio.css" />
    <!--[if IE 9 ]><link type="text/css" rel="stylesheet" media="screen" href="script/themes/alloggio/alloggio-ie9.css" /><![endif]-->

Then initialize your tooltips like this (to take content from title attribute):

                $('.titleTrigger').itx_popup({
                    position: {
                        my: "left bottom",
                        at: "right top",
                        collision: 'none none'
                    }
                });

or like this (for an AJAX call for content):

                $('.ajaxTrigger').itx_popup({
                    content: '<img src="script/themes/alloggio/spinner.gif" class="spinner"/>',
                    position: {
                        my: "left bottom",
                        at: "right top",
                        collision: 'none none'
                    },
                    onShow: function(trigger, popup) {
                        // Do something here or do an AJAX call
                    }
                });

# Contribute

You have 3-way to contribute to this project:

1. Pulling useful requests
2. Forking this project
3. Last but not least: [Donating](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=DU9Z74MC8CB5G&lc=IT&item_name=Donazioni%20aperte&no_note=0&cn=Aggiungi%20istruzioni%20speciali%20per%20il%20venditore%3a&no_shipping=1&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)!

# Author

IT-Expert  
Paolo Mazzoni