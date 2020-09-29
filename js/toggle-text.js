$(document).ready(function() {
    $("#btn-container__toggle").click(function() {
        var elem = $("#btn-container__toggle").text();
        if (elem == "+") {
            //Stuff to do when btn is in the read more state
            $("#btn-container__toggle").text("-");
            $("#additional__text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#btn-container__toggle").text("+");
            $("#additional__text").slideUp();
        }
    });
});