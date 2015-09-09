$(document).ready(function(){
    $(".up-button").on("click", function() {
        $("body").animate({
            scrollTop: 0
        },
        "slow");
    });
    $(".illustration-container .item .caption").hide();
    $(".illustration-container .item").mouseenter(function(){
        $(this).children(".caption").fadeTo(400, 0.85);
    });
    $(".illustration-container .item").mouseleave(function(){
        $(this).children(".caption").fadeTo(400, 0.0);
    });
    var illustrations = $(".illustration-container .item");
    $.each(illustrations, function(){
        var item = $(this);
        var image = $(this).children("img");
        $(image).on("load", function(){
            var h = $(image).height();
            var w = $(image).width();
            var s = $(image).attr("src");
            console.log(s + " " + h + "," + w);
            if (w > h){
                console.log("hello");
                $(item).width("100%");
            }
        });
       
    });
});