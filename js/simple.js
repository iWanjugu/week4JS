$(document).ready(function() {
        
    //to show the hidden and hide the initial and vice versa
    $(".clickable.cl1").click(function() {
        $("._showing").fadeToggle('slow');
        $("._hidden").toggle();
    });
    
    $(".clickable.cl2").click(function() {
        $("._showing").toggle();
        $("._hidden").fadeToggle('slow');
    });
    
});
