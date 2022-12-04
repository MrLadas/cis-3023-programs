// <article>[adejctive]<noun><verb><preposition><article>[adjective]<noun>
var $ = function (id) 
{
    return document.getElementById(id);
}// $function

function getArt(){
    var artArray = ($("articles").value).split(" ")
    return artArray[Math.floor(Math.random()*artArray.length)]
}//End article

function getNoun(){
    var nounArray= ($("nouns").value).split(" ")
    return nounArray[Math.floor(Math.random()*nounArray.length)]
}//End Noun

function getPrep(){
    var prepArray= ($("prepositions").value).split(" ")
    return prepArray[Math.floor(Math.random()*prepArray.length)]
}//End Prep

function getAdj(){
    if(Math.random() < 0.5)
        return ""
    var adjArray= ($("adjectives").value).split(" ")
    return adjArray[Math.floor(Math.random()*adjArray.length)] + " "
}//End adj

function getVerb(){
    var verbArray= ($("verbs").value).split(" ")
    return verbArray[Math.floor(Math.random()*verbArray.length)]
}//End article

function getSentence(){
    var sentence = (getArt() + " " + getAdj() + getNoun() + " " + getVerb() + " " + getPrep() + " " + getArt() + " " + getAdj()+ " " + getNoun() + ".") 
    var firstLetter = sentence.charAt(0);
    var outputSentence = firstLetter.toUpperCase() + sentence.substring(1,sentence.length);
    return outputSentence;
}//End Sentence

function genEssay(){
    var numOfPara = (parseInt(prompt("How many paragraphs would you like?")))
    essayOutput = ""
    var paraBreak = Math.floor(Math.random()*5)+8;
    // alert(numOfSent);
    // Get Number of sentences store in variable
    for(i = 1; i<(numOfPara*paraBreak)+1;i++){
        essayOutput += getSentence();
        if(i % paraBreak == 0){
            essayOutput += "\n \n"
        }
    }
    return essayOutput
}

function main(){
    $("essayOut").value = genEssay();  
}



window.onload = function(){
    $("generate-button").onclick = main;
    $("").value = ""
    $("articles").focus();
}