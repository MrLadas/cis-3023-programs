function $(id) {
    return document.getElementById(id);
}

function vowels() {
    //Grab user phrase and standardizes it
    for (; ;) {
        stringEntry = prompt("Enter a string to count its vowels! Enter *** to quit");
        if (stringEntry == "***")
            return alert("Thank you for using the vowel counter!");
        for (; ;) {
            if (stringEntry !== "")
                break;
            stringEntry = prompt("Please enter a string!");
        }
        stringEntry = stringEntry.toUpperCase();
        var vowelCount = 0;
        for (i = 0; i < stringEntry.length; i++) {
            if (stringEntry.charAt(i) === "A" || stringEntry.charAt(i) === "E" || stringEntry.charAt(i) === "I" || stringEntry.charAt(i) === "O" || stringEntry.charAt(i) === "U") {
                vowelCount++;
            }
        }
        if (vowelCount == 1)
            alert("There is " + vowelCount + " vowel in this string.");
        if (vowelCount > 1)
            alert("There are " + vowelCount + " vowels in this string.");    
    }
}
    

window.onload = function () 
{
    $("inputButton").onclick = vowels; //runs the vowels function when clicked     
}  