// Show current day and date
var todayDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(todayDate);

//create function to check time and to indicate whether it's in the past, presen or future
function timeTracker() {
    //get current number of hours.
    var currentTime = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        //Parses value as a string and returns the first integer
        var timeID = parseInt($(this).attr("id"));
        // To check the time and add the classes for background indicators
        if (timeID < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeID === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

// Add event listener for save button 
$(".saveBtn").on("click", function () {
    var toDoList = $(this).siblings(".description").val();
    var hourTime = $(this).parent().attr("id");
    // Save description in local storage
    localStorage.setItem(hourTime, toDoList);
})

// Get saved item from storage
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));

//call function 
timeTracker();

