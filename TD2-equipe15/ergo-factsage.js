
function clearform() {
    document.getElementById("REACT1").value = "";
    document.getElementById("REACT2").value = "";
    document.getElementById("react2n").value = "";
    document.getElementById("TMIN").value = "";
    document.getElementById("P_value2").value = "";
}


function default_values() {
    document.getElementById("form").reset();
}

//Partie server : 
$("form").submit(function(event) {
    event.preventDefault();
    postData($(this).serialize());
    document.getElementById("loader").style.display = "block";

});

function postData(form) {
    fetch("http://localhost:8080", {
            method: 'POST',
            body: form
        })
        // À noter, la fonction .json() provoquait une SyntaxError
        // Cette erreur semblait être causée par l'absence de guillemets autour des éléments de data-output.json.
        // Nous avons donc pris la liberté de modifier le fichier en ajoutant des guillemets, faute d'avoir
        // une autre solution évidente sous la main. La version modifiée de data-output.json est incluse dans le zip.
        .then((response) => response.json())
        .then(data => {
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
    for (let i = 0; i < data['output1'].length; i++) {
        x[i * 2].innerHTML = data['output1'][i]['libelle'];
        x[i * 2 + 1].innerHTML = data['output1'][i]['concentration'];
    }
    var y = document.querySelectorAll("#output2 td");
    for (let i = 0; i < data['output2'].length; i++) {
        y[i * 3].innerHTML = data['output2'][i]['libelle'];
        y[i * 3 + 1].innerHTML = data['output2'][i]['unite'];
        y[i * 3 + 2].innerHTML = data['output2'][i]['valeur'];
    }
}