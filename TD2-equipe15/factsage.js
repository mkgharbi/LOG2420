//Done 


function clearform() {
    document.getElementById("REACT1").value = "";
    document.getElementById("REACT2").value = "";
    document.getElementById("react2n").value = "";
    document.getElementById("TMIN").value = "";
    document.getElementById("P_value2").value = "";
    document.getElementById("output1").innerHTML = "";
}


function default_values() {
    document.getElementById("form").reset();
}

//Partie server : 


$("form").submit(function() {
    event.preventDefault();
    postData($(this).serialize());
})


function postData(form) {
    setTimeout(document.getElementById("loading-bar").style.display = "block", 3000);
    fetch("http://localhost:8080", {
            method: "POST",
            body: form
        })
        // À noter, la fonction .json() provoquait une SyntaxError
        // Cette erreur semblait être causée par l"absence de guillemets autour des éléments de data-output.json.
        // Nous avons donc pris la liberté de modifier le fichier en ajoutant des guillemets, faute d"avoir
        // une autre solution évidente sous la main.
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            console.log(data["output1"][3]["libelle"]);
            formatData(data);
        })
        .catch(error => console.error(error))
}

function formatData(data) {
    document.getElementById("loading-bar").style.display = "none";
    document.getElementById("output1").style.display = "block";
    var x = document.querySelectorAll("#output1 td");
    x[0].innerHTML = "Libelle";
    x[1].innerHTML = "Concentration";
    for (var i = 0; i < data["output1"].length; i++) {
        x[i * 2 + 2].innerHTML = data["output1"][i]["libelle"];
        x[i * 2 + 3].innerHTML = data["output1"][i]["concentration"];
    }
}