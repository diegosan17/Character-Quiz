var answer1;
var answer2;
var counter = 0;

$("#result").click(function() {
    answer1 = $('.question1').val();
    console.log(answer1);
    answer2 = $('.question2').val();
    console.log(answer2);
    if (answer1 === "yes" && answer2 > 5) {
        $("#dipper").css("display", "block");
        console.log("dipper");
    } else if (answer2 < 6 && answer1 === "yes") {
        $("#mabel").show();
        console.log("mabel");
    } else if (answer1 === "no" && answer2 > 5) {
        $("#bill").show();
        console.log("bill");
    } else if (answer2 < 6 && answer1 === "no") {
        $("#stan").show();
        console.log("stan");
    } else {
        alert("Enter Correct Values");
    }
});
$("#result").click(function() {
    counter += 1;
    $("#coun").text("Number of Attempts: " + counter);
});