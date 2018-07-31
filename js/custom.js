$(document).ready(function() {
    
    // Slide left para column on pageload
    $('.side-text-box').hide().slideDown(2000, 'swing');
    
    // Trigger info modal and fade background
    $(".modal-trigger").click(function() {
        $('.info-modal').show("slow")
        $('.side-text-box, .chart_background').fadeTo("slow", 0.2)
    });
    
    $(".modal-close").click(function() {
        $('.info-modal').hide("slow")
        $('.side-text-box, .chart_background').fadeTo("slow", 1)
    });    
    

});