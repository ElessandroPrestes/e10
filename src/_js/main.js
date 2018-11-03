   $(function() {
                $("div#menu-btn").click(function() {
                    $("nav ul#menu-mobile").toggle();
                });
                
                $(window).resize(function() {
                   var largura = $(window).width(); 
                    if ( largura >= 701 ) {
                        $("nav ul#menu-mobile").hide();   
                    }
                });
            });