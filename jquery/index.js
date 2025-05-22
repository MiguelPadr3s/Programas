
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
    $("h1").hide();
 });
 
 $(".hide1").click(function() {
    $("h1").fadeToggle();
    $(this).text($("h1").is(":visible") ? "Hide" : "Unhide");
})

    $("button:not(.hide1)").click (function() {
        $("h1").css("color", "purple")

        setTimeout(function() {
            $("h1").removeAttr("style");
        }, 1000);
    });

    $("input").keydown(function(event) {
        $("h1").text(event.key);
    });

    $("h1").on("mouseover", function() {
        $("h1").animate({opacity:0.3});
    });

    $("h1").on("mouseout", function() {
        $("h1").animate({opacity:1});
    })
    
