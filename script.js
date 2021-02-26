// This function takes the input from the calculator form
// and calculates/displays the results
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100; 

    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + principal + "," 
        + " at an interest rate of " + rate + "%."
        + " You will receive an amount of " + interest + ","
        + " in the year " + calcYear(years);

}

// This function calculates a year value 
// based on the current year and number of years offset 
function calcYear(year_offset) {
    var currentYear = new Date().getFullYear;
    return currentYear + year_offset;
}
        