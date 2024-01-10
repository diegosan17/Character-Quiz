var answer1;
var answer2;
$(document).ready(function() {
    let quizCount = 0;
    $("#results").click(function() {
        answer1 = $('.question1').val();
        console.log(answer1);
        answer2 = $('.question2').val();
        console.log(answer2);
        if (answer1 === "yes" && answer2 > 5) {
            $("#dipper").css("display", "block");
            $("#name").text("Dipper");
            console.log("dipper");
        } else if (answer2 < 6 && answer1 === "yes") {
            $("#mabel").show();
            $("#name").text("Mabel");
            console.log("mabel");
        } else if (answer1 === "no" && answer2 > 5) {
            $("#bill").show();
            $("#name").text("Bill Cipher");
            console.log("bill");
        } else if (answer2 < 6 && answer1 === "no") {
            $("#stan").show();
            $("#name").text("Grunkle Stan");
            console.log("stan");
        } else {
            alert("Enter Correct Values");
        }
        quizCount++;
        updateQuizCount();
    
        function updateQuizCount() {
            const quizCountText = `Quiz has been taken ${quizCount} times.`;
            $('#counter').append(`<p>${quizCountText}</p>`);}   
    });
});
$('#restartBtn').click(function() {
    $(location).attr('href', );
    $('.question1').val('');
    $('.question2').val('');
    $('#counter').empty();
    $("#mabel").hide();
    $("#dipper").hide();
    $("#stan").hide();
    $("#bill").hide();
    $("#name").text("");
});