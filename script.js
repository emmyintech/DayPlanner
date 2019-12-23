$(document).ready(function() {

    $(".saveBtn").on("click", function() {

        var value = $(this).siblings(".activities").val();
        var time = $(this).parent().attr("id");

        //local storage
        localStorage.setItem(time, value);
    });

    function localTimeHour() {
        // current time
        var timeRightNow = moment().hours();

        // looping past, present, future
        $(".eachHourBlock").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);

            if (hourBlock < timeRightNow) {
                $(this).addClass("past");
            } else if (hourBlock === timeRightNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        });

    }

    localTimeHour();

    var interval = setInterval(localTimeHour, 25000);

    $("#dateToday").text(moment().format("dddd, MMMM Do"))

    $("#9am .activities").val(localStorage.getItem("9am"));
    $("#10am .activities").val(localStorage.getItem("10am"));
    $("#11am .activities").val(localStorage.getItem("11am"));
    $("#12pm .activities").val(localStorage.getItem("12pm"));
    $("#1pm .activities").val(localStorage.getItem("1pm"));
    $("#2pm .activities").val(localStorage.getItem("2pm"));
    $("#3pm .activities").val(localStorage.getItem("3pm"));
    $("#4pm .activities").val(localStorage.getItem("4pm"));
    $("#5pm .activities").val(localStorage.getItem("5pm"));

    // test $("#8pm .activities").val(localStorage.getItem("8pm"));
    // $("#8pm .activities").val(localStorage.getItem("9pm"));

});


// });