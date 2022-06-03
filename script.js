$(".fortify").hide();
$(".savePet").hide();
$(".leaveThem").hide();
$(".Ikea").hide();
$(".trustHim").hide();
$(".revolt").hide();
$(".trustHim1").hide();
$(".trustHim2").hide();
$(".savePet1").hide();
$(".savePet2").hide();


// 

$(".optionIkea").click(function() {
    $(".Ikea").show();
    $(".intro").hide();
});

$(".optionTrust").click(function() {
    $(".trustHim1").show();
    $(".Ikea").hide();
});

$(".next1").click(function() {
    $(".trustHim2").show();
    $(".trustHim1").hide();
});

$(".optionRevolt").click(function() {
    $(".revolt").show();
    $(".Ikea").hide();
});


//

$(".optionFortify").click(function() {
    $(".fortify").show();
    $(".intro").hide();
});

$(".optionSave").click(function() {
    $(".savePet1").show();
    $(".fortify").hide();
});

$(".next2").click(function() {
    $(".savePet2").show();
    $(".savePet1").hide();
});

$(".helipic").dblclick(function() {
    $(".blank").show();
    $(".fge").text("END");
    $(".helipic").hide();
});

$(".optionLeave").click(function() {
    $(".leaveThem").show();
    $(".fortify").hide();
});

//

$(".reset").click(function() {
    $(".fortify").hide();
    $(".savePet").hide();
    $(".leaveThem").hide();
    $(".Ikea").hide();
    $(".trustHim").hide();
    $(".revolt").hide();
    $(".trustHim1").hide();
    $(".trustHim2").hide();
    $(".savePet1").hide();
    $(".savePet2").hide();
    $(".intro").show();
});

//Ignore this!! pls I couldn't find another way 2 do this lolol its so inconvienient 


$(".button1").mouseover(function() {
    $(".button1").css("background", "linear-gradient(white, red)");
    $(".button1").css("font-weight", "bold");
});
$(".button1").mouseout(function() {
    $(".button1").css("background", "white");
    $(".button1").css("font-weight", "400");
});
$(".button2").mouseover(function() {
    $(".button2").css("background", "linear-gradient(white, red)");
    $(".button2").css("font-weight", "bold");
});
$(".button2").mouseout(function() {
    $(".button2").css("background", "white");
    $(".button2").css("font-weight", "400");
});
$(".button3").mouseover(function() {
    $(".button3").css("background", "linear-gradient(white, red)");
    $(".button3").css("font-weight", "bold");
});
$(".button3").mouseout(function() {
    $(".button3").css("background", "white");
    $(".button3").css("font-weight", "400");
});
$(".button4").mouseover(function() {
    $(".button4").css("background", "linear-gradient(white, red)");
    $(".button4").css("font-weight", "bold");
});
$(".button4").mouseout(function() {
    $(".button4").css("background", "white");
    $(".button4").css("font-weight", "400");
});
$(".button5").mouseover(function() {
    $(".button5").css("background", "linear-gradient(white, red)");
    $(".button5").css("font-weight", "bold");
});
$(".button5").mouseout(function() {
    $(".button5").css("background", "white");
    $(".button5").css("font-weight", "400");
});
$(".button6").mouseover(function() {
    $(".button6").css("background", "linear-gradient(white, red)");
    $(".button6").css("font-weight", "bold");
});
$(".button6").mouseout(function() {
    $(".button6").css("background", "white");
    $(".button6").css("font-weight", "400");
});
$(".button7").mouseover(function() {
    $(".button7").css("background", "linear-gradient(white, red)");
    $(".button7").css("font-weight", "bold");
});
$(".button7").mouseout(function() {
    $(".button7").css("background", "white");
    $(".button7").css("font-weight", "400");
});
$(".button8").mouseover(function() {
    $(".button8").css("background", "linear-gradient(white, red)");
    $(".button8").css("font-weight", "bold");
});
$(".button8").mouseout(function() {
    $(".button8").css("background", "white");
    $(".button8").css("font-weight", "400");
});
$(".button9").mouseover(function() {
    $(".button9").css("background", "linear-gradient(white, red)");
    $(".button9").css("font-weight", "bold");
});
$(".button9").mouseout(function() {
    $(".button9").css("background", "white");
    $(".button9").css("font-weight", "400");
});