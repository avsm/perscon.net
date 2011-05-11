$(document).ready(
    function(){
        var lastBlock = $("ul#accordion a#default"),
            maxWidth = "500px",
            minWidth = "75px";	
        var cnt=0;
        
        $("ul#accordion li a").hover(
            function() {
                if (!($(lastBlock).get(0) === $(this).get(0))) {
                    $(lastBlock).animate({ width: minWidth }, { queue:false, duration:400 });
                    $(this).animate({ width: maxWidth }, { queue:false, duration:400 });
                    lastBlock = this;
                }
            }, 
            function() {}
        );
    });
