//Done 


function clearData() {
    document.getElementById("REACT1").value = "";
    document.getElementById("REACT2").value = "";
    document.getElementById("react2n").value = "";
}



function default_values() {
    document.getElementById("myForm").reset();
}



//Connexion with the server  : done  
/*
//document.getElementById('submitButton').addEventListener('submit', getPosts);
//document.getElementById('submitButton').addEventListener('submit', addPost);


function getPosts() {
    fetch("https://localhost:8080/")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function(post) {
                output += `
            <div class="card card-body mb-3">
            <h3>${post.libelle}</h3>
            <p>${post.concentration}</p>
            <p>${post.conditions}</p>
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error))

}
*/
/*
function addPost(event) {
    event.preventDefault();
    let form = postData($(this).serialize());
    let title = document.getElementById('libelle').value;
    let body = form;

    fetch("https://localhost:8080/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => console.log(error))
}

*/
/*
function postData(form) {
    event.preventDefault();
    let form = postData($(this).serialize());
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

*/
















/*
function getData() {
    fetch("http://localhost:8080")
        .then(response => response.json())
        .then(myJson => console.json())
        .catch(error => console.log(error))
}



function getUsers() { 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let output = ',h2 class'
        } 
        .catch(error => console.log(error))
}
*/

/*


$("form").submit(function(event) {
    event.preventDefault();
    postData($(this).serialize());

});


const getPosts = () => {
    return fetch("http://localhost:8080")
        .then(response => response.json())
        .then(myJson => console.json())
        .catch(error => console.log(error))

    const post = {
        title: "fetch",
        body: JSON.stringify(post)
    }
    const newPost = () => {
        const options = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        return fetch(url, options)
            .then(reponse => response.json())
            .then(response => console.log(response))
            .catch(error => console.error('Error:${error}'))
    }
}
*/
/*
        //TODO : getData and connect data to the server : 



        
            function setup() {
                noCanvas();
                var buttonSubmit = document.getElementById("submitButton");
                buttonSubmit.addEventListener("click", function() {
                        var myForm = document.getElementById("myForm");
                        var data = new URLSearchParams(new FormData(myForm));

                        fetch(url, {
                                method: 'POST',
                                headers: new Headers(),
                                body: JSON.stringify(data)
                            })
                            .then((response) => response.json())
                            .then(function(response) {})
                            .catch(error => {
                                    console.log('Error: ', error.message))
                            })
                })
        }


        $("#loading").show();

        setTimeout(() => http.send(), 3000);



        $("#loading").hide();



        window.onload = function() {


        //var img = $("<img src = 'loader.gif'/> ");
        //$("#result").append(img);


        fetch('http://localhost:8080/', {
                method: 'post',
                body: data
            })
            .then((response) => response.json())
            .then(function(response) {
                $("#result").empty();
                console.log(data);
                //GenerateOutput(data);
            })

        })

        }

        function getData() {
            return fetch("https://localhost:8080/")
                .then(response => response.json())
                .then(posts => console.log(posts))
        }
        const newPost => {
        const options = {
            method: 'POST',
            headers: new Headers,
            body: JSON.stringify(form.serializeArray()),
        }
        })

        function sendData(url, data) {
            var formData = new FormData();

            for (var name in data) {
                formData.append(name, data[name]);
            }

            function postData() {
                event.preventDefault();
            }
        }
        //document.getElementById("submit").addEventListener('submit', setup);
        var form = document.getElementById("form");

        function setup(event) {
            noCanvas();

            event.preventDefault();
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(form.serializeArray()),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                }).then((response) => response.json())
                .then((data) => console.log(data))
                .catch(error => console.error('Error: ${error} '))
        }

        function postData(event) {
            event.preventDefault();

            fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: new Headers(),
                    body: JSON.stringify({ tittle: tittle, body: body })
                }).then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        }
        */