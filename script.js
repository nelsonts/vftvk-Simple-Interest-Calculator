// This function takes the input from the calculator form
// and calculates/displays the results
function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal.value <= 0) {
        alert("Enter a positive number");
        principal.focus();
    } else {

        var interest = principal.value * years * rate / 100; 

        var result = document.getElementById("result");
        var resultMessage = "If you deposit <span class='highlight'>" + principal.value + "</span>,<br/>" 
        + " at an interest rate of <span class='highlight'>" + rate + "%</span>.<br/>"
        + " You will receive an amount of <span class='highlight'>" + interest + "</span>,<br/>"
        + " in the year <span class='highlight'>" + calcYear(years) + "</span>";
        console.log(resultMessage);
        result.innerHTML = resultMessage;
    }

}

// This function calculates a year value 
// based on the current year and number of years offset 
function calcYear(year_offset) {
    var currentYear = new Date().getFullYear();
    return currentYear + parseInt(year_offset);
}

// This function takes the value of the range bar input field
// and displays the value in the element "ratevalue"
function ratechange()
{
    var rate = document.getElementById("rate").value;
    var ratevalue = document.getElementById("ratevalue");
    ratevalue.innerHTML = rate + "%";
}
        