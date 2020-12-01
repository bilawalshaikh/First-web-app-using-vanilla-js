// var btnClick=document.querySelector("#btn-click");
// var txtArea=document.querySelector(".txt-area");
// var transTxt=document.querySelector(".trans-txt");




// var serverURL="https://api.funtranslations.com/translate/minion.json"



// function getTranslationURL(text){
 
//     return  serverURL +  "?"+ "text" + text
// }

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("something wrong with server! try again after some time")
// }

// function clickme(){
//     var textInput=txtArea.value;

//     fetch(getTranslationURL(textInput))
//        .then(response => response.json())
//     .then(json =>  {
//         var translatedText = json.Contents.translated;
//     transTxt.innerText = translatedText; // output
//    })
//    .catch(errorHandler)
  
// }
// btnClick.addEventListener("click",clickme)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickMe() {
    var textInput = txtInput.value; // taking input



    fetch(getTranslationURL(textInput))
       .then(response => response.json())
       .then(json =>  {
        var translatedText =json.contents.translated;
     outputDiv.innerText =translatedText;})
   

}

btnTranslate.addEventListener("click", clickMe)