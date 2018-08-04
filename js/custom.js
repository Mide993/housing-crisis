$(document).ready(function() {
    
    // Landing Alert
    $("body").click(function() {
	    $("#landing-alert").hide("fast");
    })
    
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

    // Allocations
    $("#area_effect").mouseenter(function() {
        $("#text_effect_supply").addClass("highlight");
        $(".fa-key").fadeTo(200, 1);
    });
    $("#area_effect").mouseleave(function() {
        $("#text_effect_supply").removeClass("highlight");
        $(".fa-key").fadeTo(200, .5);
    });

    // New Builds
    $("#builds_by_year").mouseenter(function() {
        $("#text_effect_supply").addClass("highlight").fadeIn(200, 1);
        $(".fa-home").fadeTo(200, 1);
    });
    $("#builds_by_year").mouseleave(function() {
        $("#text_effect_supply").removeClass("highlight");
        $(".fa-home").fadeTo(200, .5);
    });

    // Severe Waiting list
    $("#severe_list").mouseenter(function() {
        $("#text_effect_demand").addClass("highlight");
        $(".fa-exclamation-triangle").fadeTo(200, 1);
    });
    $("#severe_list").mouseleave(function() {
        $("#text_effect_demand").removeClass("highlight");
        $(".fa-exclamation-triangle").fadeTo(200, .5);
    });

    // Waiting List
    $("#area_list").mouseenter(function() {
        $("#text_effect_demand").addClass("highlight");
        $(".fa-users").fadeTo(200, 1);
    });
    $("#area_list").mouseleave(function() {
        $("#text_effect_demand").removeClass("highlight");
        $(".fa-users").fadeTo(200, .5);
    });

    // Private Landlords
    $("#area_private").mouseenter(function() {
        $("#text_effect_private_landlords").addClass("highlight");
    });
    $("#area_private").mouseleave(function() {
        $("#text_effect_private_landlords").removeClass("highlight");
    });

    // Logos
    $(".logos").mouseenter(function() {
        $(this).fadeTo(200, 1);
    });   
    $(".logos").mouseleave(function() {
        $(this).fadeTo(200, 0.5);
    });

    
});
