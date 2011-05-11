$(document).ready(
    function(){
        var lastBlock = $("ul#accordion a#default"),
            maxWidth = "500px",
            minWidth = "75px";	
        
        $("ul#accordion li a").hover(
            function() {
                if (!($(lastBlock).get(0) === $(this).get(0))) {
                    // ...test two elements for equality
                    $(lastBlock).animate({ width: minWidth }, { queue:false, duration:400 });
                    $(this).animate({ width: maxWidth }, { queue:false, duration:400 });
                    lastBlock = this;
                }
            }, 
            function() {}
        );
    });
