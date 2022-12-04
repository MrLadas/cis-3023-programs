var $ = function (id) 
{
    return document.getElementById(id);
}

var calculate = function()
{
    var floatAnnualInterest
    var floatMonthlyInterest
    var intLengthMonths
    var floatMonthlyPayment
    var floatIntialLoan
    //Convert APR to Monthly Interest Rate
    floatAnnualInterest= parseFloat(($("interest_rate").value).replace(/%/g, ''));
    floatMonthlyInterest= parseFloat((floatAnnualInterest/12)/100);
    
    //Pull Loan length and Intial amount from HTML and removes special characters
    intLengthMonths= parseInt($("length_month").value);
    floatIntialLoan= parseFloat(($("loan_intial").value).replace(/[,$]/g, ''));

    //Formula for calculating monthly payment
   floatMonthlyPayment= floatIntialLoan * 
    ((floatMonthlyInterest)/(1-(1 + floatMonthlyInterest)**(-intLengthMonths)));

    $("monthly_payment").value= "$" + parseFloat(floatMonthlyPayment).toFixed(2);
}

window.onload = function () 
{
    $("name").value = "";
    $("loan_intial").value = "";
    $("length_month").value = "";
    $("interest_rate").value = "";
    $("calculate").onclick = calculate;
    $("name").focus();
}

