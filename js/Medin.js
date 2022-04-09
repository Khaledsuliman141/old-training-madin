$(document).ready(function ()
            {
        "use strict";
        
        $(".carousel").carousel(
            {
                interval: 1000
            }
        );
        
        //Start Option Box
    
        $(".tool").click(function ()
            {
                $(".box").fadeToggle();
            });
        
        //Change theme Color
        
        $(".theme").click(function ()
            {
                $("link[href*='color']").attr("href",$(this).attr("date-value"));
            });
        
        //Start scroll to top
        
        var top = $("#to-top");
        
        $(window).scroll('load', function ()           
            {   
                console.log($(this).scrollTop());
                
                if ($(this).scrollTop()>=700)
                {
                   top.show(); //code
                }
                else
                {
                    top.hide();
                }
                
            });
        
        top.click(function ()
            {
                $('html,body').animate({scrollTop:0}),600
            });
    
    
    });

// Start Loading

$(window).on('load', function ()
            {
        "use strict";
    
        $(".loading").fadeOut(1500,
            function ()
            {  
                $(this).remove();
            });
            
    });

            