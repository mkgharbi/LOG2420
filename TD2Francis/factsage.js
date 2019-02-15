document.getElementsByName("submit").addEventListener("submit", postData);
var formTest = document.getElementById("form");
console.log(JSON.stringify(form.serializeArray()))

function postData(event) {
    event.preventDefault();
    var form = document.getElementById("form");
    //event.target.form();
    //objectifyForm(form.serializeArray());

    fetch("http://localhost:8080", {
        method: 'POST',
        body: JSON.stringify(form.serializeArray()),
    })

}

function objectifyForm(formArray) {

    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}


/*
(event) => {
    event.preventDefault();
    event.form;
}

fetch(localhost8080, //url, option
    //retourne promesse
    {
        method: //http verbs methods
        body:
        form: //?
    }
    
    )
    .then(function(data)) //après asyncrone finie, roule la fonction dans then
    .catch(function()) //pour erreur


    .then((response) => response.json()) //arrow fonction
    .then((data)=>cquon fait avec le data
        methode generator)

*/