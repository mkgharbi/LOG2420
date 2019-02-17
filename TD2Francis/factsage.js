$("form").submit(function(event) {
    event.preventDefault();
    postData($( this ).serialize());
    document.getElementById("loader").style.display = "block";

});
  
function clearform() {
	document.myform.REACT1.value = "";
	document.myform.REACT2.value = "";
	document.myform.REACT3.value = "";
	document.myform.REACT4.value = "";
	document.myform.react1n.value = "";
	document.myform.react2n.value = "";
	document.myform.react3n.value = "";
	document.myform.react4n.value = "";
}

function default_values() {
    document.myform.TMIN.value = "1000";
    document.myform.T_units.selectedIndex = 0;
    document.myform.MASS.selectedIndex = 0;
    document.myform.P_value.value = "1";
    document.myform.PRESSURE.selectedIndex = 0;
    document.myform.CUT.selectedIndex = 0;
    document.myform.format.selectedIndex = 1;
    document.myform.DIST.selectedIndex = 0;
    document.myform.REACT1.value = "Si";
    document.myform.REACT2.value = "O2";
    document.myform.REACT3.value = "";
    document.myform.react1n.value = "";
    document.myform.react2n.value = "1.5";
    document.myform.react3n.value = "";
}


function postData(form) {
    fetch("http://localhost:8080", {
            method: 'POST',
            body: form
        })
        // À noter, la fonction .json() provoquait une SyntaxError
        // Cette erreur semblait être causée par l'absence de guillemets autour des éléments de data-output.json.
        // Nous avons donc pris la liberté de modifier le fichier en ajoutant des guillemets, faute d'avoir
        // une autre solution évidente sous la main.
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            console.log(data['output1'][3]['libelle']);
            formatData(data);
        })

    .catch(function(error) {
        console.log(error);
    })
}

function formatData(data) {
    document.getElementById("output1").style.display = "table";
    document.getElementById("output2").style.display = "table";
    document.getElementById("loader").style.display = "none";
    var x = document.querySelectorAll("#output1 td");
    for (let i = 0; i < data['output1'].length; i++){
        x[i*2].innerHTML = data['output1'][i]['libelle'];
        x[i*2 + 1].innerHTML = data['output1'][i]['concentration'];
    }
    var y = document.querySelectorAll("#output2 td");
    for (let i = 0; i < data['output2'].length; i++){
        y[i*3].innerHTML = data['output2'][i]['libelle'];
        y[i*3+1].innerHTML = data['output2'][i]['unite'];
        y[i*3+2].innerHTML = data['output2'][i]['valeur'];
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