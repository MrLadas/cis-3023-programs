var $ = function (id) 
{
    return document.getElementById(id);
} //DOM function

var main = function() {
    var numberOfTests = $("numOfTests").value
    if(!isNaN(parseInt(numberOfTests)) && parseInt(numberOfTests) > 0 && !/\D+/.test(numberOfTests)){
        numberOfTests = parseInt($("numOfTests").value,10)
        $("probOutput").value = calcProb(numberOfTests) + "%" 
    }       
    else{
        $("numOfTests").value = "" //Reset input
        $("probOutput").value = "Input is not a valid number" //Reset output 
    }     
}

function calcProb(numTests) {
    var duplicateCounter = 0
    for(var i = 0;i<numTests;i++){
        testArray = birthdayGen()
        if(!Array.isArray(testArray)){
            alert(`Error! \n ${testArray.join()} \n 
            Is not a valid test group!`)
        }//Sanity check for if provided array is valid
        var searchedValues = []
        for(var j = 0;j<testArray.length;j++){
            if(searchedValues.includes(testArray[j])){
                duplicateCounter++
                break;
            }
            searchedValues[searchedValues.length] = testArray[j]
        }//Searches the test group for duplicates
    }//Loop to run the test the specified # of times
    var probPercent = ((duplicateCounter / numTests) * 100).toFixed(2)
    return probPercent 
}//returns a % of the times the group had duplicate birthdays

function birthdayGen(){
    var birthdayArray = new Array(25)
    for(var i=0;i<birthdayArray.length;i++){
        birthdayArray[i] = Math.floor(Math.random()*365)+1
    }
    return birthdayArray
}//Generates a pseudo-random group of 25 birthdays

window.onload = function(){
    $("calcBtn").onclick = main;
    $("numOfTests").value = ""
    $("probOutput").value = ""
    $("numOfTests").focus();
}