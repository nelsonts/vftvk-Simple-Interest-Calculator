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
        result.innerHTML = "If you deposit " + principal.value + "," 
            + " at an interest rate of " + rate + "%."
            + " You will receive an amount of " + interest + ","
            + " in the year " + calcYear(years);
    }

}

// This function calculates a year value 
// based on the current year and number of years offset 
function calcYear(year_offset) {
    var currentYear = new Date().getFullYear;
    return currentYear + year_offset;
}

function ratechange()
{
    var rate = document.getElementById("rate").value;
    var ratevalue = document.getElementById("ratevalue");
    ratevalue.innerHTML = rate + "%";
}
        