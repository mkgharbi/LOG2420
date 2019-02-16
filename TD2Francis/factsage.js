$( "form" ).submit(function( event ) {
    event.preventDefault();
    postData($( this ).serialize());

});
  

function postData(form) {
    fetch("http://localhost:8080", {
        method: 'POST',
        body: form,
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    })
    .catch(function(error) {
        console.log(error);
    })
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