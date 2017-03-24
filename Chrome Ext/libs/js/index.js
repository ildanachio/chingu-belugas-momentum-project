//console.log('hello');
//run();

$("#htmlBtn").click(function() {
    $("#htmlContainer").toggleClass('hidden');
    $("#htmlBtn").toggleClass('color');
    countElements();
});

$("#cssBtn").click(function() {
    $("#cssContainer").toggleClass('hidden');
    $("#cssBtn").toggleClass('color');
    countElements();
});

$("#jsBtn").click(function() {
    $("#jsContainer").toggleClass('hidden');
    $("#jsBtn").toggleClass('color');
    countElements();
});

function countElements(){
    var count_elements = $('.hidden').length;
    if (count_elements === 1 ){
        console.log(count_elements);
        $( ".containers" ).not( ".hidden" ).removeClass('col-xs-3 col-xs-4 col-xs-6').addClass('col-xs-4');
    } else if(count_elements === 2){
        $( ".containers" ).not( ".hidden" ).removeClass('col-xs-3 col-xs-4 col-xs-6').addClass('col-xs-6');
    }else if(count_elements === 3){
        $( ".containers" ).not( ".hidden" ).removeClass('col-xs-3 col-xs-4 col-xs-6').addClass('col-xs-12');
    }else {
        $( ".containers" ).not( ".hidden" ).removeClass('col-xs-3 col-xs-4 col-xs-6').addClass('col-xs-3');
    }
}

$("#runBtn").click(function() {
    run()
});


//$(".panels").height($(window).height() - $("#header").height() - 35);
//$(".panels").width(($(window).width() / 2) - 25);

$('iframe').contents().find('html').html($("#htmlPanel").val());

$('#htmlPanel').on('change keyup paste', function() {
    $("iframe").contents().find("html").html('<style>' + $("#cssPanel").val() + '</style>' + $("#htmlPanel").val());
});

function run() {
    $("iframe").contents().find("html").html('<style>' + $("#cssPanel").val() + '</style>' + $("#htmlPanel").val());
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
}

