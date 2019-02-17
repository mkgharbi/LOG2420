$( "form" ).submit(function( event ) {
    event.preventDefault();
    postData($( this ).serialize());

});
  

function postData(form) {
    fetch("http://localhost:8080", {
        method: 'POST',
        body: form
    })
    // À noter, la fonction .json() provoquait une SyntaxError
    // Cette erreur semblait être causée par l'absence de guillemets autour des éléments de data-output.json.
    // Nous avons donc pris la liberté de modifier le fichier en ajoutant des guillemets, faute d'avoir
    // une autre solution évidente sous la main.
    .then((res)=>res.json())
    .then(data=> {console.log(data);
                   console.log(data['output1'][3]['libelle']); 
                formatData(data);})
   
    .catch(function(error) {
        console.log(error);
    })
}

function formatData(data) {
    var x = document.querySelectorAll("#output1 td");
    for (var i = 0; i < data['output1'].length; i++){
        x[i*2].innerHTML = data['output1'][i]['libelle'];
        x[i*2 + 1].innerHTML = data['output1'][i]['concentration'];
    }
}


/*
fetch("data-output.json")
.then(response => {
    response.json();
}).then(data => {
    console.log(data);
})
*/
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